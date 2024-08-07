<template>
  <q-page class="flex justify-center">

    <div class="q-gutter-y-md column">
      <q-input class="input" v-model="sentence" placeholder="Saisir une phrase ou un mot" hint="C'est le mot qu'il faudra prononcer en allemand"  style="width: 300px" />
      <div class="col container">
        <div class="center">
          <q-btn :icon="buttonIcon" round size="30px" @click="toggleRecord" />
        </div>
      </div>

      <q-list>
        <q-item
          v-for="result in results"
          :key="result.fmtDate"
          :style="`background-color: ${result.color}`"
        >
          <q-item-section>
            <q-item-label class="result">
              {{ result.text }}
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label caption class="result-score">{{ result.score }} %</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import format from 'date-fns/format'
import chroma from 'chroma-js'

const sentence = ref('')
const isRecording = ref(false)
const results = ref([])

const buttonIcon = computed(() => {
  return isRecording.value ? 'stop' : 'mic'
})

let mediaRecorder = null

async function validate (audio) {
  console.log({ audio })
  const data = {
    input: sentence.value,
    audio,
    profile_name: 'default',
    speaker_id: 'test',
    persist: !1,
    original_word_mapping: !0
  }
  const response = await axios.post(process.env.API_URL, data, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY,
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  console.log('RESULTAT: ', response.data)
  const { utterance_score: scoreIndice } = response?.data || {}
  if (scoreIndice) {
    const date = new Date()
    const score = Math.round(scoreIndice * 100)
    const color = chroma('red').mix('lightgreen', scoreIndice).hex()
    results.value.push({
      date: format(date, 'yyyyMMddHHmmss', new Date()),
      fmtDate: format(date, 'HH:mm', new Date()),
      text: sentence.value,
      score,
      color
    })
  }
}

async function recordAudio () {
  if (navigator.mediaDevices) {
    console.log('getUserMedia supported.')

    const constraints = { audio: true }
    let chunks = []

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      mediaRecorder = new MediaRecorder(stream)
      mediaRecorder.start()

      mediaRecorder.onstop = (e) => {
        const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' })
        chunks = []
        const fileReader = new FileReader()
        fileReader.readAsDataURL(blob)
        fileReader.onloadend = function () {
          const audioBase64 = fileReader.result
          let audio = audioBase64.slice(22)
          audio = audioBase64.split('base64,')[1]
          validate(audio)
          mediaRecorder = null
        }
      }

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }
    }).catch((err) => {
      console.error(`The following error occurred: ${err}`)
    })
  }
}

function stopRecordingAndValidate () {
  mediaRecorder.stop()
}

async function toggleRecord () {
  isRecording.value = !isRecording.value
  if (isRecording.value) {
    await recordAudio()
  } else {
    stopRecordingAndValidate()
  }
}
</script>

<style scoped>
.input {
  padding-top: 20px;
}

.container {
  padding-top: 20px;
  position: relative;
}

.center {
  position: absolute;
  margin-left: -50px;
  left: 50%;
}

.result {
  font-size: 1.8em;
}

.result-score {
  font-size: 1.8em;
}
</style>

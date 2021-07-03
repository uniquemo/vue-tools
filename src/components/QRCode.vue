<template>
  <h3>Generate QRCode</h3>
  <div class="content">
    <textarea
      placeholder="Generate QRCode..."
      v-model="input"
    />
  </div>

  <div class="btnGroup">
    <button @click="genQRCode" :disabled="!input">Generate</button>
    <button @click="reset" :disabled="!input && !qrcode">Reset</button>
  </div>

  <div
    class="qrcode"
    :class="{bordered: !qrcode}"
    ref='qrcode'
  />
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

interface IData {
  input: string;
  qrcode: any;
  qrcodeRef: HTMLDivElement | null;
}

export default defineComponent({
  name: 'QRCode',
  data() {
    return {
      input: '',
      qrcode: null,
      qrcodeRef: null
    } as IData
  },
  mounted() {
    this.qrcodeRef = this.$refs.qrcode as HTMLDivElement
  },
  methods: {
    genQRCode() {
      if (!this.qrcodeRef) return

      const text = this.input.trim()
      if (!text) return

      if (this.qrcodeRef.childNodes.length) {
        this.qrcodeRef.innerHTML = ''
      }

      const { width, height } = this.qrcodeRef.getBoundingClientRect()
      this.qrcode = new (window as any).QRCode(this.qrcodeRef, {
        text,
        width,
        height
      })
    },
    reset() {
      if (!this.qrcodeRef) return;
      this.input = ''
      this.qrcode = null
      this.qrcodeRef.innerHTML = ''
    }
  },
  watch: {
    input(newInput: string, oldInput: string) {
      console.log('input changed')
    }
  }
})
</script>

<style scope>
.content {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}
.qrcode {
  width: 15em;
  height: 15em;
  margin-top: 1em;
}
textarea {
  flex: 1;
  height: 7em;
  padding: 0.5em;
  font-size: 14px;
}
.btnGroup {
  display: flex;
  align-items: center;
}
.btnGroup button {
  margin-right: 0.5em;
}
</style>

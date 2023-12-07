<script setup lang='ts'>
const { intersectionObserver, isIntersection, elRef } = useIntersectionObserver()
console.log(isIntersection)
console.log(elRef)

const container = ref()
const boxArray = ref([
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  }
])

onMounted(() => {
  boxArray.value.forEach((box:any) => {
    if (box) {
      console.log(box)
      intersectionObserver(box)
    }
  })
})
const boxRef = (index:number) => (el:any) => {
  if (el) {
    boxArray.value[index] = el
  }
}
</script>

<template>
  <div id="scroll-container" ref="container">
    <div v-for="(box, index) in boxArray" :ref="boxRef(index)" :key="index" class="box">
      {{ index+1 }}
    </div>
  </div>
</template>

<style scoped>
#scroll-container {
  display: flex;
  height: 300px;
  gap:15px;
  overflow-x: scroll;
  /* scroll-snap-type: x proximity; */
  scroll-behavior: smooth;
}

.box {
  flex: 0 0 33%;

  height: 100%;
  box-sizing: border-box;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>

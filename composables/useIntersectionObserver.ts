export function useIntersectionObserver () {
  const observer = ref()
  const isIntersection = ref<boolean>(false)
  const elRef = ref(null)

  const intersectionObserver = (
    el:any,
    options = {
      root: el,
      threshold: 0.5
    }
  ) => {
    console.log('el', el)

    observer.value = new IntersectionObserver((entries:any) => {
      entries.forEach((item:any) => {
        isIntersection.value = item.isIntersecting

        console.log('item', item)
      })
    }, options)
    observer.value.observe(el)
  }
  return {
    intersectionObserver,
    isIntersection,
    elRef
  }
}

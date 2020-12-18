<template>
  <masonry :cols="{default: 3, 1000: 2, 700: 1}" :gutter="30" id="portfolio">
    <div v-for="(item, index) in portfolio" :key="index" class="column">
      <img v-img:group loading="lazy" :src="item.image.url" v-img="{title: `${item.title[0].text} - $${item.price}`}"/>
      <h2 class="mt-4 text-center font-bold text-lg text-gray-800">{{item.title[0].text}}</h2>
      <p class="text-center text-lg text-gray-600">${{item.price}}</p>
    </div>
  </masonry>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    try{
      const portfolio = (await $prismic.api.getSingle('homepage')).data.portfolio
      return {
        portfolio
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style>
#portfolio .column {
  margin-bottom: 30px;
}
#portfolio .column h2, 
#portfolio .column p {
  font-family: 'Raleway', sans-serif;
}
</style>
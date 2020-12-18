<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-12 relative min-h-screen">
    <header class="flex justify-between py-8 sm:py-12 items-center">
      <h1 class="logo sm:text-4xl font-bold">Lainé Bakery</h1>
    </header>
    <main class="pb-64">
      <Nuxt />
    </main>
    <footer class="absolute right-0 left-0 h-40 bottom-0 border-t py-10 text-4xl text-gray-600 flex justify-center space-x-10">
      <a :href="contact.facebook" target="_blank" aria-label="linkedin" class="hover:text-gray-900 transition duration-200">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a :href="`mailto:${contact.email}`" target="_blank" aria-label="email" class="hover:text-gray-900 transition duration-200">
        <i class="fas fa-envelope-square"></i>
      </a>
      <a :href="`tel:${contact.phone}`" target="_blank" aria-label="phone" class="hover:text-gray-900 transition duration-200">
        <i class="fas fa-phone-square"></i>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return{
      resume: null,
      contact: {
        facebook: null,
        email: null,
        phone: null
      }
    }
  },
  async fetch() {
    const data = await this.$prismic.api.query(this.$prismic.predicates.at("document.type", "homepage")).then(promise =>{
      return promise.results[0].data
    })

    this.contact.facebook = data.facebook[0].text
    this.contact.email = data.email[0].text
    this.contact.phone = data.phone[0].text
  }
}
</script>

<style>
  .logo {
    font-family: 'Shadows Into Light', cursive;
    font-size: 4rem;
  }
</style>
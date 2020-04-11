<template>
  <blockquote class="blockquote">
    <div class="quote"><slot></slot></div>
    <footer class="quoter"><slot name="quoter"></slot></footer>
  </blockquote>
</template>

<style lang="stylus" scoped>
.blockquote
  margin-top 2em
  margin-bottom 2em

.blockquote + .blockquote
  margin-top -2em
  
.quote
  font-style italic 

.quoter
  font-weight 600
</style>
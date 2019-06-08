<template>
  <div class="about">
    <div class="text-xs-center">
      <v-chip color="primary" text-color="white">Primary</v-chip>

      <v-chip color="secondary" text-color="white">Secondary</v-chip>

      <v-chip color="red" text-color="white">Colored Chip</v-chip>

      <v-chip color="green" text-color="white">Colored Chip</v-chip>
    </div>
    <v-container>
      <v-timeline>
        <v-timeline-item v-for="n in 4" :key="n" color="red lighten-2" large>
          <template v-slot:opposite>
            <span>Tus eu perfecto</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="headline">Lorem ipsum</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

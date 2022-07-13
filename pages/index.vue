<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="text-h6 mb-4">
        Raven's Advanced Progressive Matrices Series II of 36 cards is the
        acclaimed test of intelligence, enter by John Raven. Each card is
        missing the last piece. It is required to decide which shape is missing
        by choosing it from the eight offered. The test determines the general
        ability for logical thinking, independent of erudition, profession,
        education, etc., therefore, it belongs to the «culturally independent».
        Advanced matrices, unlike conventional Raven matrices, are designed to
        measure high IQs - up to 136 points (136 occurs on average in 1 out of
        122 people).
      </h1>
      <v-btn depressed color="error" @click="clickStart()"> Start </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    clickStart() {
      this.$router.push("/test");
    },
  },
};
</script>

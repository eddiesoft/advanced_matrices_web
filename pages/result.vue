<template>
  <v-row>
    <v-col class="text-center">
      <div class="my-xs-2 my-md-4 text-xs-h6 text-md-h5 font-weight-medium">
        You answered {{ minus }} questions out of
        {{ iqScoreList.length }} correctly
      </div>
      <div class="my-xs-2 my-md-4 text-xs-h6 text-md-h5 font-weight-medium">
        Your IQ is {{ score }}
      </div>
      <div class="my-xs-2 my-md-4 text-xs-h6 text-md-h5 font-weight-medium">
        {{ description }}
      </div>
      <div class="mt-6"></div>
      <v-btn
        v-if="!isAllAnswersCorrect"
        color="error"
        elevation="2"
        text
        @click="clickMistakes()"
      >
        Show Mistakes
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ResultPage",
  data() {
    return {
      minus: 0,
      score: 0,
      isAllAnswersCorrect: false,
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      falseList: "test/falseList",
      correctAnswersList: "test/correctAnswersList",
      iqScoreList: "test/iqScoreList",
      wrongList: "test/wrongList",
      answersList: "test/answersList",
    }),
  },
  created() {
    const answersListCopy = [...this.answersList];
    const falseListCopy = [...this.falseList];

    let isEqual =
      answersListCopy.sort().toString() == falseListCopy.sort().toString();
    if (isEqual) {
      this.$router.push("/");
    } else {
      this.compareAnswers();
    }
  },
  methods: {
    ...mapActions({
      addAppropriate: "test/addAppropriate",
      addCorrect: "test/addCorrect",
      addWrong: "test/addWrong",
      clearAppCorWrongLists: "test/clearAppCorWrongLists",
    }),
    clickMistakes() {
      this.$router.push("/mistakes");
    },
    compareAnswers() {
      this.clearAppCorWrongLists();

      for (let i = 0; i < this.correctAnswersList.length; i++) {
        if (this.correctAnswersList[i] != this.answersList[i]) {
          this.addAppropriate(i);
          this.addCorrect(this.correctAnswersList[i] - 1);
          this.addWrong(this.answersList[i] - 1);
        }
      }

      this.minus = this.iqScoreList.length - this.wrongList.length;
      this.score = this.iqScoreList[this.minus - 1];
      this.isAllAnswersCorrect = this.score == 136;
      this.description =
        this.score < 86
          ? "Mild dementia"
          : this.score < 90
          ? "Intellect below average"
          : this.score < 110
          ? "Average level of intelligence"
          : this.score < 130
          ? "Intellect above average"
          : "High level of intelligence";
    },
  },
};
</script>

<style lang="scss">
</style>

<template>
  <v-row>
    <v-col class="text-center">
      <div class="mb-xs-2 mb-md-4 text-xs-h6 text-md-h5 font-weight-medium">
        Item {{ currentItem }} (remaining {{ itemsLength - currentItem }})
      </div>
      <div class="question-container">
        <v-img :src="getImgUrl(questions[currentItem - 1].src, true)"> </v-img>
        <div class="mask-container"></div>
      </div>
      <div class="my-xs-2 my-md-4 text-xs-h6 text-md-h5 font-weight-medium">
        Choose a suitable item
      </div>
      <div class="answer-container">
        <v-img :src="getImgUrl(answers[currentItem - 1].src, false)"> </v-img>
        <div class="mask-container">
          <div v-for="num in 8" :key="num" @click="selectOption(num)"></div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TestPage",
  data() {
    return {
      currentItem: 1,
      itemsLength: 36,
      questions: [
        { id: "1", src: "question 1.jpg" },
        { id: "2", src: "question 2.jpg" },
        { id: "3", src: "question 3.jpg" },
        { id: "4", src: "question 4.jpg" },
        { id: "5", src: "question 5.jpg" },
        { id: "6", src: "question 6.jpg" },
        { id: "7", src: "question 7.jpg" },
        { id: "8", src: "question 8.jpg" },
        { id: "9", src: "question 9.jpg" },
        { id: "10", src: "question 10.jpg" },
        { id: "11", src: "question 11.jpg" },
        { id: "12", src: "question 12.jpg" },
        { id: "13", src: "question 13.jpg" },
        { id: "14", src: "question 14.jpg" },
        { id: "15", src: "question 15.jpg" },
        { id: "16", src: "question 16.jpg" },
        { id: "17", src: "question 17.jpg" },
        { id: "18", src: "question 18.jpg" },
        { id: "19", src: "question 19.jpg" },
        { id: "20", src: "question 20.jpg" },
        { id: "21", src: "question 21.jpg" },
        { id: "22", src: "question 22.jpg" },
        { id: "23", src: "question 23.jpg" },
        { id: "24", src: "question 24.jpg" },
        { id: "25", src: "question 25.jpg" },
        { id: "26", src: "question 26.jpg" },
        { id: "27", src: "question 27.jpg" },
        { id: "28", src: "question 28.jpg" },
        { id: "29", src: "question 29.jpg" },
        { id: "30", src: "question 30.jpg" },
        { id: "31", src: "question 31.jpg" },
        { id: "32", src: "question 32.jpg" },
        { id: "33", src: "question 33.jpg" },
        { id: "34", src: "question 34.jpg" },
        { id: "35", src: "question 35.jpg" },
        { id: "36", src: "question 36.jpg" },
      ],
      answers: [
        { id: "1", src: "answer 1.jpg" },
        { id: "2", src: "answer 2.jpg" },
        { id: "3", src: "answer 3.jpg" },
        { id: "4", src: "answer 4.jpg" },
        { id: "5", src: "answer 5.jpg" },
        { id: "6", src: "answer 6.jpg" },
        { id: "7", src: "answer 7.jpg" },
        { id: "8", src: "answer 8.jpg" },
        { id: "9", src: "answer 9.jpg" },
        { id: "10", src: "answer 10.jpg" },
        { id: "11", src: "answer 11.jpg" },
        { id: "12", src: "answer 12.jpg" },
        { id: "13", src: "answer 13.jpg" },
        { id: "14", src: "answer 14.jpg" },
        { id: "15", src: "answer 15.jpg" },
        { id: "16", src: "answer 16.jpg" },
        { id: "17", src: "answer 17.jpg" },
        { id: "18", src: "answer 18.jpg" },
        { id: "19", src: "answer 19.jpg" },
        { id: "20", src: "answer 20.jpg" },
        { id: "21", src: "answer 21.jpg" },
        { id: "22", src: "answer 22.jpg" },
        { id: "23", src: "answer 23.jpg" },
        { id: "24", src: "answer 24.jpg" },
        { id: "25", src: "answer 25.jpg" },
        { id: "26", src: "answer 26.jpg" },
        { id: "27", src: "answer 27.jpg" },
        { id: "28", src: "answer 28.jpg" },
        { id: "29", src: "answer 29.jpg" },
        { id: "30", src: "answer 30.jpg" },
        { id: "31", src: "answer 31.jpg" },
        { id: "32", src: "answer 32.jpg" },
        { id: "33", src: "answer 33.jpg" },
        { id: "34", src: "answer 34.jpg" },
        { id: "35", src: "answer 35.jpg" },
        { id: "36", src: "answer 36.jpg" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      falseList: "test/falseList",
      answersList: "test/answersList",
    }),
  },
  methods: {
    ...mapActions({
      add: "test/add",
      clearAnswersList: "test/clearAnswersList",
    }),
    getImgUrl(imagePath, isQuestion) {
      if (isQuestion) {
        return require("~/images/question-images/" + imagePath);
      }
      return require("~/images/answer-images/" + imagePath);
    },
    selectOption(selectedOption) {
      if (this.currentItem == 1) this.clearAnswersList();

      this.add({ currentItem: this.currentItem - 1, selectedOption });
      if (this.currentItem < this.itemsLength) {
        this.currentItem += 1;
      } else {
        this.$router.push("/result");
      }
    },
  },
};
</script>

<style lang="scss">
.question-container {
  position: relative;

  .mask-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
}

.answer-container {
  position: relative;

  .mask-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 50% 50%;
  }
}
</style>

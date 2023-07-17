const app = Vue.createApp({
  data() {
    return {
      weight: null,
      height: null,
      result: null,
      history: []
    };
  },
  methods: {
    calculateBMI() {
      const weight = parseFloat(this.weight);
      const height = parseFloat(this.height) / 100;
      const bmi = weight / (height * height);

      if (isNaN(bmi) || bmi <= 0) {
        this.result = null;
      } else {
        if (bmi < 18.5) {
          this.result = 'Underweight: ' + bmi.toFixed(2) + 'kg/m2';
          this.resultColor = 'blue'; // Assign color for Underweight
        } else if (bmi < 25) {
          this.result = 'Normal: ' + bmi.toFixed(2) + 'kg/m2';
          this.resultColor = 'green'; // Assign color for Normal
        } else if (bmi < 30) {
          this.result = 'Overweight: ' + bmi.toFixed(2) + 'kg/m2';
          this.resultColor = 'orange'; // Assign color for Overweight
        } else {
          this.result = 'Obese: ' + bmi.toFixed(2) + 'kg/m2';
          this.resultColor = 'red'; // Assign color for Obese
        }
        this.history.push({
          height: this.height,
          weight: this.weight,
          result: this.result,
          resultColor: this.resultColor
        });
      }
    },
    removeEntry(index) {
      this.history.splice(index, 1);
    }
  }
});

app.mount('#app');

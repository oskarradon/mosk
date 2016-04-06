import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    updateProduct(product) {
      var params = {
        title: this.get('title'),
        artist: this.get('artist'),
        year: this.get('year'),
        country: this.get('country'),
        price: this.get('price'),
        image: this.get('image'),
        description: this.get('description')
      };
      console.log(product);
      this.set('showUpdateForm', false);
      this.sendAction('updateProduct', product, params);
    }
  }
});

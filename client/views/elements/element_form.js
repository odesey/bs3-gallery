Template.elementForm.events({
  'submit form': function(e) {
    e.preventDefault();
    var element = {
      name: $(e.target).find('[name=name]').val(),
      symbol: $(e.target).find('[name=symbol]').val(),
      number: $(e.target).find('[name=number]').val(),
      weight: $(e.target).find('[name=weight]').val(),
      catergory: $(e.target).find('[name=catergory]').val()
      // break;
    }

    element._id = Elements.insert(element);
    Router.go('allElements', element);
  }
});
// console.log('all elements js file');

  

Template.allElements.helpers({
  elements: function() {
    return Elements.find();
  }
});
Template.allElements.events({
	
  'click #filters': function(e) {
  	// *******
  	var $container = $('.isotope').isotope({
  	  itemSelector: '.element-item',
  	  layoutMode: 'fitRows',
  	  getSortData: {
  	    name: '.name',
  	    symbol: '.symbol',
  	    number: '.number parseInt',
  	    category: '[data-category]',
  	    weight: function( itemElem ) {
  	      var weight = $( itemElem ).find('.weight').text();
  	      return parseFloat( weight.replace( /[\(\)]/g, '') );
  	    }
  	  }
  	});

  	// filter functions
  	var filterFns = {
  	  // show if number is greater than 50
  	  numberGreaterThan50: function() {
  	    // console.log('number greater than 50');
  	    var number = $(this).find('.number').text();
  	    return parseInt( number, 10 ) > 50;
  	  },
  	  // show if name ends with -ium
  	  ium: function() {
  	    // console.log('ium clicked');
  	    var name = $(this).find('.name').text();
  	    return name.match( /ium$/ );
  	  }
  	};
  	// *******
    // console.log('filter buttons clicked');
    var filterValue = $(e.target).attr('data-filter-value');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
    console.log('filter button ' + filterValue + ' clicked');
  },
  'click #sorts': function(e) {
  	e.preventDefault();
  	// *******
  	var $container = $('.isotope').isotope({
  	  itemSelector: '.element-item',
  	  layoutMode: 'fitRows',
  	  getSortData: {
  	    name: '.name',
  	    symbol: '.symbol',
  	    number: '.number parseInt',
  	    category: '[data-category]',
  	    weight: function( itemElem ) {
  	      var weight = $( itemElem ).find('.weight').text();
  	      return parseFloat( weight.replace( /[\(\)]/g, '') );
  	    }
  	  }
  	});

  	// filter functions
  	var filterFns = {
  	  // show if number is greater than 50
  	  numberGreaterThan50: function() {
  	    console.log('number greater than 50');
  	    var number = $(this).find('.number').text();
  	    return parseInt( number, 10 ) > 50;
  	  },
  	  // show if name ends with -ium
  	  ium: function() {
  	    console.log('ium clicked');
  	    var name = $(this).find('.name').text();
  	    return name.match( /ium$/ );
  	  }
  	};
  	// *******
    var sortValue = $(e.target).attr('data-sort-value');
    $container.isotope({ sortBy: sortValue });
    console.log('sort button ' + sortValue + ' clicked');
    // console.log($(e.target));

  },
  'click .button-group': function(e) {
  	$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  }

})

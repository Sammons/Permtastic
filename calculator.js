
var calculator = function( set, width ) {
	var map_of_set_to_dec = {};
	var count = 0;
	for (var i in set) {
		map_of_set_to_dec[count] = set[i];
		count++;
	}
	var ceiling = count;

	var carry_over = function( array_rep ) {
		for (var i = array_rep.length - 1; i > 0; i--) {
			if (array_rep[i] === ceiling) {
				array_rep[i] = 0;
				array_rep[i-1]++;
			}
		};
		if (array_rep[0] === ceiling) array_rep[0] = 0;
	}

	var add = function( array_rep ) {
		array_rep[array_rep.length-1]++;
		carry_over( array_rep );
		return array_rep;
	}
	var get_number_rep = function( array_rep ) {
		var ret_str = "";
		for (var i in array_rep) ret_str += map_of_set_to_dec[array_rep[i]];
		return ret_str;
	}

	var count_max = Math.pow(set.length, width);

	// var sample_representation = [];
	// for (i = 0; i < width; i++) { sample_representation.push(0)}

	// var sample_size = (count_max > 2000 ? 2000 : count_max);
	// var t = Date.now();
	// for (var j = 0; j < sample_size; j++) {
	// 	get_number_rep(sample_representation);
	// 	console.log('.\b');
	// 	add(sample_representation)
	// }
	// var time_per = (Date.now() - t)/sample_size;
	
	// console.log('estimated running time:', count_max * time_per);
	// console.log('estimated number of results:', count_max);
	var array_representation = [];
	for (i = 0; i < width; i++) { array_representation.push(0) }

	t = Date.now();
	for (var j = 0; j <= count_max - 1; j++) {
		console.log( j,
			get_number_rep( array_representation )
			);
		add(array_representation)
	}
	console.log('actual run time:',Date.now()-t);

}

var a = new calculator( ['a','b','c'], 9)
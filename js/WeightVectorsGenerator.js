function WeightVectorsGenerator(m, h, d, t){

    this.h = h;
    this.m = m;
    this.t = t;
    this.d = d;

    this.h1generator = function(g) { // g = h
		for (var i=0; i<m; ++i){
			for (var j=0; j<m; ++j){
				this.printValue( (i == j) ? (g) : (0) );
			}
			$("#input-output").append("\n");
		}
	}

	this.h2generator = function(){
		this.h1generator(h);

		for (var i = 0; i < (m-1); ++i) {
			for (var j = i+1; j < m ; ++j) {
				for (var k = 0; k < m; ++k){
					this.printValue( (k == i || k == j) ? 1 : 0 );
				}
				$("#input-output").append("\n");
			}
		}
	}

	this.generate = function(){
        console.log("Generating...");

		if (h == 1) {
			this.h1generator(h);
		} else if (h == 2) {
			this.h2generator();
		}
		else {
			var count = new Array();
			for (var i = 0; i < m; ++i){
				count.push(0);
			}
			for (var j = 1; j < Math.pow(h+1, m); ++j) {
				count = this.update(count);
				var accumulate = 0;

                $.each( count, function( key, value ) {
                    accumulate+=value;
                });

				if (h == accumulate )
					this.print(count);
			}
		}
	}

	this.printValue = function(value){
		$("#input-output").append((((1.0 - t)/ (m)) + ( t * (value)  * d)) + "\t");
	}

    this.print = function(v){
        var that = this;

		$.each( v, function( key, i ) {
			that.printValue(i);
		});

		$("#input-output").append("\n");
	}

	this.update = function(v) {
		for (var i = 0; i< v.length; i = ((v[i] != 0) ? v.length : i+1)) {
			v[i] = v[i]+1;
			v[i] = v[i]%(h+1);
		}
		return v;
	}

}

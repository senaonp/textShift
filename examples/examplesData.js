var examples = [
	{
		// this example is unable to render due to Unicode characters after testing in browsers
		"encoded_text": `<div class="example_noload" id="example1_noload"></div>`,
		// "encoded_text": `<iframe type="text/plain" src="./txt/example1.txt" id="example1"></iframe><div class="example_noload" id="example1_noload"></div>`,
		"decoded_text": `
			went to the zoo this weekend<br>
			i saw the exhibits for reptiles, birds, primates, and more<br>
			<br>
			most of the pandas were taking a nap but one was snacking on bamboo<br>
			the lions were resting in the shade watching visitors<br>
			sea otters swam along a pool of water playing with some toys<br>
			<br>
			my favorite animals were the frogs and turtles.<br>
			at the end of the trip i got some souvenirs which included postcards and a shirt.<br>
			<br>
			very excited about visiting the animals again next time!<br>
		`,
		"decoded_ciphers": "[ ciphers ]<br>(1) 5<br>(6) (2,3,1,1,3,2,1,5,2,1)<br>(15) 34 91 200 (30,57,134,220,375,390)<br>(7) 15 (9,2,13,10,5,7,15,12,6,8,1,14,3,11,4)<br>(8) 5 (2,5,1,4,3)<br>(22) (1,1,5,2,6,2,3,5) -9"
	},
	{
		// this example is unable to render due to Unicode characters after testing in browsers
		"encoded_text": `<div class="example_noload" id="example2_noload"></div>`,
		// "encoded_text": `<iframe src="./txt/example2.txt" type="text/plain" id="example2"></iframe><div class="example_noload" id="example2_noload"></div>`,
		"decoded_text": `
			textshift.net was originally a project that was built from a code exercise in shifting text by a number.<br>
			By shifting through a character's unicode value, multiple characters can be used from a charCode of zero up to 65535.<br>
			<br>
			Eventually, other cipher options were added in addition to shifting which include sequencing/inserting characters.<br>
			The intent was that any operation that can modify a text and is reversible can be included as a ciphertext option.<br>
			Since each cipher option is reversible, they can be chained together to form more complex ciphertext and<br>
			decoded by applying the decoding ciphers in reverse order.<br>
		`,
		"decoded_ciphers": "[ ciphers ]<br>(6) (2,4,1,2,3,2,5,1)<br>(15) 80 120 200 (20,150,180,220,306,402,520,600)<br>(19) (0,100,180,230,350,400,460,550,600,620,700) 100 2<br>(6) (1,1,2,1,2,4,2,1,3,5,2,2)<br>(17) 80 120 (1,2,2,1,4,5) (2,5,2,2,3,4)"
	},
	{
		// this example is unable to render due to Unicode characters after testing in browsers
		"encoded_text": `<div class="example_noload" id="example3_noload"></div>`,
		// "encoded_text": `<iframe src="./txt/example3.txt" type="text/plain" id="example3"></iframe><div class="example_noload" id="example3_noload"></div>`,
		"decoded_text": `
			finding the limit of x as x approaches zero for the function f(x) = 1/x<br>
			<br>
			as we plug in values from the left side of zero (negative values) we get numbers approaching negative<br>
			infinity for values converging towards zero.<br>
			x = -1 >> f(x) = -1<br>
			x = -0.5 >> f(x) = -2<br>
			x = -0.01 >> f(x) = -100<br>
			x = -0.0005 >> f(x) = -2000<br>
			x = -0.000001 >> f(x) = -1000000<br>
			<br>
			likewise, we get numbers approaching positive infinity for values converging towards zero from the 
			right side.<br>
			x = 1 >> f(x) = 1<br>
			x = 0.5 >> f(x) = 2<br>
			x = 0.01 >> f(x) = 100<br>
			x = 0.0005 >> f(x) = 2000<br>
			x = 0.000001 >> f(x) = 1000000<br>
			<br>
			we can observe asymptotic behavior for f(x) for the limit of zero in f(x) = 1/x;<br>
			this function approaches positive/negative infinity for positive/negative values of x approaching<br>
			zero respectively.<br>
		`,
		"decoded_ciphers": "[ ciphers ]<br>(23) 5 (2,3,5,2,6,3) 2<br>(23) 15 (1,4,3,2,5,2,3,4,2,5,3) 1"
	},
	{
		"encoded_text": `<iframe src="./txt/example4.txt" type="text/plain" id="example4"></iframe><div class="example_noload" id="example4_noload"></div>`,
		"decoded_text": `
			2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59<br>
		`,
		"decoded_ciphers": "[ ciphers ]<br>(9) 5 20 15<br>(2)<br>(7) 6 (2,4,1,5,3,6)<br>(8) 9 (6,1,4,5,8,2,7,3,9)<br>(16) 48 57 2 (1,2,1,2,3,2,1,2)<br><br>"
	},
	{
		"encoded_text": `<iframe src="./txt/example5.txt" type="text/plain" id="example5"></iframe><div class="example_noload" id="example5_noload"></div>`,
		"decoded_text": `
			def recursive_sort_list(i):<br>
			&nbsp r = []<br>
			&nbsp if len(i) <= 1:<br>
			&nbsp &nbsp return i<br>
			&nbsp for j in range(len(i)):<br>
			&nbsp &nbsp if i[j] < i[0]:<br>
			&nbsp &nbsp &nbsp i[0], i[j] = i[j], i[0]<br>
			&nbsp r += [i[0]] + recursive_sort_list(i[1:])<br>
			&nbsp return r<br>
		`,
		"decoded_ciphers": "[ ciphers, sequence-only type ]<br>(6) (2,5,3,4,2,1,6,4,5,4)<br>(3) 85<br>(7) 5 (5,4,1,3,2)<br>(8) 9 (2,6,7,4,3,9,8,1,5)"
	},
]
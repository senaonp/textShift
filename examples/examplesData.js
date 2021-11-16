var examples = [
	{
		"encoded_text": "encoded_ciphertext_1",
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
			very excited about visiting the animals again next time!
		`,
		"decoded_ciphers": "decoding ciphers:<br>"
	},
	{
		"encoded_text": "encoded_ciphertext_2",
		"decoded_text": `
			textshift.net was originally a project that was built from a code exercise in shifting text by a number.<br>
			By shifting through a character's unicode value, multiple characters can be used from a charCode of zero up to 65535.<br>
			<br>
			Eventually, other cipher options were added in addition to shifting which include sequencing/inserting characters.<br>
			The intent was that any operation that can modify a text and is reversible can be included as a ciphertext option.<br>
			Since each cipher option is reversible, they can be chained together to form more complex ciphertext and<br>
			decoded by applying the decoding ciphers in reverse order.
		`,
		"decoded_ciphers": "decoding ciphers:<br>"
	},
	{
		"encoded_text": "encoded_ciphertext_3",
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
			zero respectively.
		`,
		"decoded_ciphers": "decoding ciphers:"
	},
	{
		"encoded_text": "encoded_ciphertext_4",
		"decoded_text": `
			prime numbers up to sixty: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59
		`,
		"decoded_ciphers": "decoding ciphers:"
	},
	{
		"encoded_text": "encoded_ciphertext_5",
		"decoded_text": `
			# this function describes sorting a list of items using recursion<br>
			# params: (i) list of numbers<br>
			def recursive_sort_list(i):<br>
			&nbsp r = []<br>
			&nbsp if len(i) <= 1:<br>
			&nbsp &nbsp return i<br>
			&nbsp for j in range(len(i)):<br>
			&nbsp &nbsp if i[j] < i[0]:<br>
			&nbsp &nbsp &nbsp i[0], i[j] = i[j], i[0]<br>
			&nbsp r += [i[0]] + recursive_sort_list(i[1:])<br>
			&nbsp return r
		`,
		"decoded_ciphers": "decoding ciphers:"
	},
]
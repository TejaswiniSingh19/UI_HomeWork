
			function book(author, publisher, age) {
    		this.author  = author;
    		this.publish = publisher;
    		this.age     = age;
   		    
			}


			var book1 = new book("Chethan Bhagath", "Rose", 45);
	
            document.write(book1.age+"<br/>")
            document.write(book1.publish+"<br>")
            document.write(book1.author)
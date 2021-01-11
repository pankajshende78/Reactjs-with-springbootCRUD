package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Book;
import com.example.demo.service.BookService;

@RestController
@CrossOrigin
public class controller {

	@Autowired
	private BookService bookservice;

	@GetMapping("/getbook")
	public ResponseEntity<List<Book>> demo() {

		List<Book> list = (List<Book>) this.bookservice.getbooks();
		if (list.size() <= 0) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.of(Optional.of(list));

	}

	@PostMapping("/newbook")
	public ResponseEntity<Book> newbook(@RequestBody Book book) {

		
		Book b=(Book)this.bookservice.newbook(book);
		
		if(b==null)
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
			
		return ResponseEntity.of(Optional.of(b)); 

	}

	@GetMapping("/getbook/{id}")
	public ResponseEntity<Book> getbook(@PathVariable("id") int id) 
	{
	Book	book=(Book)this.bookservice.findbyid(id);

	if(book==null)
	{
		return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
		
	}
	return ResponseEntity.of(Optional.of(book));
	}
	
	
	
	
	@DeleteMapping("/deletebook/{id}")
	public Book deletebook(@PathVariable("id") int id)
	{
		
		try
		{
			return this.bookservice.deleteBook(id);
			
		}catch(Exception ee)
		{
			
		}
		return null;
	}
	
	
	
	@PutMapping("/updatebook/{id}")
	public Book updateBook(@RequestBody Book book ,@PathVariable("id") int  id)
	{
		return this.bookservice.updatebook(book, id);
	}
	

}

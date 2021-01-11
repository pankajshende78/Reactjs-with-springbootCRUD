package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entity.Book;


public interface UserRepository extends CrudRepository<Book , Integer>  {
	

	public Book findById(int id);
	public Book deleteById(int id);
	
	
	
}

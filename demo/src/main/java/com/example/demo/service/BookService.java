package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserRepository;
import com.example.demo.entity.Book;

@Service
public class BookService {

	@Autowired
	private UserRepository userrepo;

	private static List<Book> list = new ArrayList<Book>();

	public List<Book> getbooks() {
		List<Book> list = (List<Book>) this.userrepo.findAll();

		return list;
	}

	public Book newbook(Book book) {
		return this.userrepo.save(book);
	}

	public Book findbyid(int id) {
		return this.userrepo.findById(id);
	}

	public Book deleteBook(int id) {
		return this.userrepo.deleteById(id);
	}

	public Book updatebook(Book book, int id) {
		book.setTitle(book.getTitle());
		book.setDiscription(book.getDiscription());

		if (book.getId() == id) {
			return this.userrepo.save(book);
		}
		return book;
	}

}

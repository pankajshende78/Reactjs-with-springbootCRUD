package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.dao.UserRepository;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(DemoApplication.class, args);

		/*
		 * UserRepository userrepo = context.getBean(UserRepository.class);
		 * 
		 * User u = new User();
		 * 
		 * u.setName("pankaj");
		 * 
		 * User uk= userrepo.save(u); System.out.println(uk);
		 */

//		u.setName("pankaj");
//		
//		User u1=userrepo.save(u);
//		
//		System.out.println(u1);

	}

}

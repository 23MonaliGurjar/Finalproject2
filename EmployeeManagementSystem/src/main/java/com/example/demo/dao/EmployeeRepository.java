package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.entity.Employee;
@Repository
@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(path="emp")
public interface EmployeeRepository extends JpaRepository<Employee, Integer>
{

}

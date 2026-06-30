package com.demo.notification.service;

import com.demo.notification.entity.Employee;
import com.demo.notification.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(
            EmployeeRepository employeeRepository
    ) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee saveEmployee(Employee employee) {

        if (employee.getStatus() == null) {
            employee.setStatus("ACTIVE");
        }

        Timestamp now =
                new Timestamp(System.currentTimeMillis());

        employee.setCreatedAt(now);
        employee.setUpdatedAt(now);

        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(
            Long id,
            Employee updatedEmployee
    ) {

        Employee employee =
                employeeRepository.findById(id).orElse(null);

        if (employee == null) {
            return null;
        }

        employee.setEmployeeCode(
                updatedEmployee.getEmployeeCode()
        );

        employee.setEmployeeName(
                updatedEmployee.getEmployeeName()
        );

        employee.setDesignation(
                updatedEmployee.getDesignation()
        );

        employee.setDepartment(
                updatedEmployee.getDepartment()
        );

        employee.setPhone(
                updatedEmployee.getPhone()
        );

        employee.setEmail(
                updatedEmployee.getEmail()
        );

        employee.setAddress(
                updatedEmployee.getAddress()
        );

        employee.setJoiningDate(
                updatedEmployee.getJoiningDate()
        );

        employee.setSalary(
                updatedEmployee.getSalary()
        );

        employee.setStoreId(
                updatedEmployee.getStoreId()
        );

        employee.setStatus(
                updatedEmployee.getStatus()
        );

        employee.setUpdatedAt(
                new Timestamp(System.currentTimeMillis())
        );

        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
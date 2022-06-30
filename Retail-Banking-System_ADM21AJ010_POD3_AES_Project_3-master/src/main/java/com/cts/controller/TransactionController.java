package com.cts.controller;

import com.cts.model.Transaction;
import com.cts.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transfers")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/")
    public Transaction makeTransfer(@RequestBody Transaction transaction){
        return transactionService.makeTransfer(transaction);
    }

    @GetMapping("/all")
    public List<Transaction> readTransactions() {
        return transactionService.readTransactions();
    }
}

package com.cts.controller;

import com.cts.model.Account;
import com.cts.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/")
    public Account createAccount(@RequestBody Account account){
        return accountService.createAccount(account);
    }

    @GetMapping("/{id}")
    public Account findAccountByAccNo(@PathVariable("id") Long accountNumber){
        return accountService.findAccountByAccNo(accountNumber);
    }

    @PutMapping("/deposit")
    public Account deposit(@RequestParam("accNo") Long accountNumber, @RequestParam("amt") Double amount){
        return accountService.deposit(accountNumber,amount);
    }

    @PutMapping("/withdraw")
    public Account withdraw(@RequestParam("accNo") Long accountNumber, @RequestParam("amt") Double amount){
        return accountService.withdraw(accountNumber,amount);
    }
}

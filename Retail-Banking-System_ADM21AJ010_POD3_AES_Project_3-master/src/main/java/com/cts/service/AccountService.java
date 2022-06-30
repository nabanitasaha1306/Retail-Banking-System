package com.cts.service;

import com.cts.model.Account;
import com.cts.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private static long nextAccountNumber = 11223145;

    @Autowired
    private AccountRepository accountRepository;

    public Account createAccount(Account account) {
        account.setAccountNumber(accountGen());
        account.setAccountBalance(1000.0);
        return accountRepository.save(account);
    }


    public Account findAccountByAccNo(Long accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber);
    }

    public Account deposit(Long accountNumber, Double amount) {
        Account account = accountRepository.findByAccountNumber(accountNumber);
        double initialBalance = account.getAccountBalance();
        account.setAccountBalance(initialBalance + amount);
        return accountRepository.save(account);
    }

    public Account withdraw(Long accountNumber, Double amount) {
        Account account = accountRepository.findByAccountNumber(accountNumber);
        double initialBalance = account.getAccountBalance();
        if(amount > initialBalance){
            return null;
        }
        else{
            account.setAccountBalance(initialBalance - amount);
            return accountRepository.save(account);
        }
    }

    private long accountGen() {
        return ++nextAccountNumber;
    }

    public boolean checkIfUserExists(Long accountNumber){
        return accountRepository.findByAccountNumber(accountNumber) != null;
    }
}

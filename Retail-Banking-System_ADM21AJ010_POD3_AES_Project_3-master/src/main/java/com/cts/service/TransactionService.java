package com.cts.service;

import com.cts.model.Account;
import com.cts.model.Transaction;
import com.cts.repository.AccountRepository;
import com.cts.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    public Transaction makeTransfer(Transaction transaction) {
        Account sender = accountRepository.findByAccountNumber(transaction.getSenderAccountNumber());
        Account receiver = accountRepository.findByAccountNumber(transaction.getReceiverAccountNumber());
        Date date = new Date();
        transaction.setTransactionDate(date);
        double senderCurrBalance = sender.getAccountBalance();
        double receiverCurrBalance = receiver.getAccountBalance();
        if(senderCurrBalance >= transaction.getAmount()){
            senderCurrBalance -= transaction.getAmount();
            receiverCurrBalance += transaction.getAmount();
            sender.setAccountBalance(senderCurrBalance);
            receiver.setAccountBalance(receiverCurrBalance);
            accountRepository.save(sender);
            accountRepository.save(receiver);
            transaction.setStatus("SUCCESS");
            return transactionRepository.save(transaction);
        }
        else
            transaction.setStatus("FAILED");
        return transactionRepository.save(transaction);
    }


    public List<Transaction> readTransactions() {
        return transactionRepository.findAll();
    }
}

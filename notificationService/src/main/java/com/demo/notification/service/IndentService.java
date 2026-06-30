package com.demo.notification.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.notification.dto.IndentMessage;
import com.demo.notification.entity.Indent;
import com.demo.notification.repository.IndentRepository;

@Service
public class IndentService {

    @Autowired
    private IndentRepository indentRepository;

    public Indent saveIndent(
            IndentMessage msg
    ) {

        Indent indent = new Indent();

        indent.setIndentId(
                msg.getIndentId()
        );

        indent.setSenderId(
                msg.getSenderId()
        );

        indent.setSenderName(
                msg.getSenderName()
        );

        indent.setReceiverId(
                msg.getReceiverId()
        );

        indent.setItemName(
                msg.getItemName()
        );

        indent.setQuantity(
                msg.getQuantity()
        );

        indent.setPriority(
                msg.getPriority()
        );

        indent.setTimestamp(
                msg.getTimestamp()
        );

        indent.setStatus(
                msg.getStatus()
        );

        return indentRepository.save(
                indent
        );
    }

    public void updateStatus(
            String indentId,
            String status
    ) {

        Optional<Indent> optionalIndent =
                indentRepository.findByIndentId(
                        indentId
                );

        if (
                optionalIndent.isPresent()
        ) {

            Indent indent =
                    optionalIndent.get();

            indent.setStatus(
                    status
            );

            indentRepository.save(
                    indent
            );
        }
    }
}
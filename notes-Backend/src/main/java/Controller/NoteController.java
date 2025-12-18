package com.example.notes.controller;

import com.example.notes.entity.Note;
import com.example.notes.repository.NoteRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/notes")
public class NoteController {

    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping(consumes = "text/plain")
    public Note createNote(@RequestBody String content) {
        return noteRepository.save(new Note(content));
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {

  faqs = [
    { question: '¿Vendes por menor?', answer: 'No, solo por mayor.', show: false },
    { question: '¿Pregunta 2?', answer: 'Respuesta a la pregunta 2.', show: false },
    { question: '¿Pregunta 3?', answer: 'Respuesta a la pregunta 2.', show: false },
    { question: '¿Pregunta 4?', answer: 'Respuesta a la pregunta 2.', show: false },
    { question: '¿Pregunta 5?', answer: 'Respuesta a la pregunta 2.', show: false },
    { question: '¿Pregunta 6?', answer: 'Respuesta a la pregunta 2.', show: false },
    { question: '¿Pregunta 7?', answer: 'Respuesta a la pregunta 2.', show: false },

    // Agrega más preguntas y respuestas aquí según sea necesario
  ];

  toggleAnswer(faq: any) {
    faq.show = !faq.show;
  }

}

import { Component } from '@angular/core';

interface Skill {
  name: string;
  value: number;
}

@Component({
  selector: 'app-hardysoftskills',
  templateUrl: './hardysoftskills.component.html',
  styleUrls: ['./hardysoftskills.component.css']
})
export class HardysoftskillsComponent {

  skills: Skill[] = [
    { name: 'Liderazgo', value: 89 },
    { name: 'Inteligencia Social', value: 85 },
    { name: 'Autogestión', value: 86 },
    { name: 'Idiomas', value: 50 },
    { name: 'Pensamiento Analítico', value: 80 },
    { name: 'Programación', value: 60 }
  ];

}


import { Component } from '@angular/core';
import { TeamMember } from '../team-member';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-third',
  imports: [RouterLink],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
   team: TeamMember[] = [
  { name: 'إبراهيم حسن',   role: 'مصور طبيعة',        img: 'https://i.pravatar.cc/150?img=1' },
  { name: 'محمد علي',       role: 'مصور بورتريه',       img: 'https://i.pravatar.cc/150?img=2' },
  { name: 'سالم أحمد',      role: 'مصور محترف',        img: 'https://i.pravatar.cc/150?img=3' },
  { name: 'جمال عبدالله',   role: 'مصور ومراجع تقني',   img: 'https://i.pravatar.cc/150?img=4' },
  { name: 'ليث محمود',      role: 'فنان بصري',          img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'داود خالد',      role: 'مدرب تصوير',         img: 'https://i.pravatar.cc/150?img=6' },

  { name: 'منصور الزهراني', role: 'مصور زفاف',          img: 'https://i.pravatar.cc/150?img=7' },
  { name: 'باسم المصري',    role: 'مصور فني',           img: 'https://i.pravatar.cc/150?img=8' },
  { name: 'رامي الخطيب',    role: 'مصور ماكرو',         img: 'https://i.pravatar.cc/150?img=9' },
  { name: 'طارق النعيمي',   role: 'مصور معماري',        img: 'https://i.pravatar.cc/150?img=10' },
  { name: 'لؤي الصالح',     role: 'مصور تجاري',         img: 'https://i.pravatar.cc/150?img=11' },
  { name: 'فيصل الدوسري',   role: 'مصور جوي',           img: 'https://i.pravatar.cc/150?img=14' },

  { name: 'ياسر العتيبي',   role: 'مصور رحالة',         img: 'https://i.pravatar.cc/150?img=15' },
  { name: 'ماجد القحطاني',  role: 'مصور استوديو',        img: 'https://i.pravatar.cc/150?img=16' },
  { name: 'أحمد الشهري',    role: 'مصور رياضي',         img: 'https://i.pravatar.cc/150?img=17' },
  { name: 'عبدالله الغامدي', role: 'مصور عقارات',       img: 'https://i.pravatar.cc/150?img=18' },
  { name: 'نايف المطيري',   role: 'مصور مواليد',        img: 'https://i.pravatar.cc/150?img=19' },
  { name: 'دحام الحسيني',   role: 'فنان بصري',          img: 'https://i.pravatar.cc/150?img=20' },

  { name: 'هاني الشمري',    role: 'مصور طعام',          img: 'https://i.pravatar.cc/150?img=21' },
  { name: 'نادر سعيد',      role: 'مصور شوارع',         img: 'https://i.pravatar.cc/150?img=22' },
  { name: 'خالد الفيصل',    role: 'مصور فلكي',          img: 'https://i.pravatar.cc/150?img=23' },
  { name: 'سامي الحربي',    role: 'خبير تعديل صور',      img: 'https://i.pravatar.cc/150?img=24' },
  { name: 'فارس العلي',     role: 'فنان فوتوغرافي',      img: 'https://i.pravatar.cc/150?img=25' },
  { name: 'عمر الراشد',     role: 'مصور حياة برية',      img: 'https://i.pravatar.cc/150?img=26' },

  { name: 'فهد السبيعي',    role: 'مراجع معدات',        img: 'https://i.pravatar.cc/150?img=27' },
  { name: 'سلطان الراجحي',  role: 'فنان تصوير',          img: 'https://i.pravatar.cc/150?img=28' },
  { name: 'كريم الفهد',     role: 'خبير تقني',          img: 'https://i.pravatar.cc/150?img=29' },
  { name: 'راشد الجاسر',    role: 'فنان بصري',          img: 'https://i.pravatar.cc/150?img=30' },
];
}

import { DataService } from "@/interfaces/serviceInterface";
import { Pelatihan, Konsultan, Pengkajian, MediaProduction } from "@/assets/images";

export const dataService: DataService[] = [
    {
        imgPath: Pelatihan,
        title: 'Pelatihan',
        caption: 'Layanan pelatihan oleh profesional untuk memberikan pengetahuan, keterampilan, maupun panduan kepada stakeholders',
    },
    {
        imgPath: Konsultan,
        title: 'Konsultan',
        caption: 'Layanan konsultan dalam membantu stakeholders memaksimalkan aspek bisnis pariwisata berkelanjutan dari stakeholders.',
    },
    {
        imgPath: Pengkajian,
        title: 'Pengkajian',
        caption: 'Layanan kajian terhadap aspek bisnis, proyek, kebijakan untuk memberikan wawasan dan rekomendasi dalam menentukan strategi yang efektif.'
    },
    {
        imgPath: MediaProduction,
        title: 'Media & Production',
        caption: 'Layanan produksi media untuk menciptakan konten multimedia yang berkualitas tinggi dan menarik',
    },
];

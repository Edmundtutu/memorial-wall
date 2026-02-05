<?php

namespace Database\Seeders;

use App\Models\Memory;
use App\Models\Memorial;
use App\Models\Reflection;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FrMukasaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
                
        $mukasa = Memorial::create([
            'name' => 'Rev. Fr. Emmanuel Mukasa',
            'slug' => 'fr-emmanuel-mukasa',
            'date_of_birth' => '1966-12-13',
            'date_of_passing' => '2026-02-02',
            'dedication' => "Rev. Fr. Emmanuel Mukasa is remembered as a devoted priest and educator whose life was marked by discipline, humility, and a deep commitment to priestly formation. He shaped many lives and left a lasting legacy within the Church. May He rest in Peace",
            'cover_image' => "https://memorial.yocava.com/storage/profiles/fr-mukasa-coverimage.jpeg",
            'avatar' => "https://memorial.yocava.com/storage/profiles/fr-mukasa-avatar.png",
        ]);

        // Fr. Mukasa's memories
        $mmem1 = Memory::create([
            'memorial_id' => $mukasa->id,
            'type' => 'quote',
            'content' => 'Obwaato buffa magoba',
            'author_name' => 'Former Seminarian',
            'created_at' => '2026-02-05 10:00:00',
        ]);

        Reflection::create([
            'memory_id' => $mmem1->id,
            'content' => 'He used to keep reminding us not to lose track due to temporary excitement',
            'author_name' => 'Former Seminarian',
            'created_at' => '2026-02-05 14:30:00',
        ]);
        Reflection::create([
            'memory_id' => $mmem1->id,
            'content' => 'That is a quote worth reflecting upon. Never to let your guard down',
            'author_name' => null,
            'created_at' => '2026-02-05 14:45:00',
        ]);

        $mmem2 = Memory::create([
            'memorial_id' => $mukasa->id,
            'type' => 'text',
            'content' => 'I remember those DeBello Garlico classes well. The man narrated stories as if he saw the events himself!!.. Respect and RIP Fr. Mukasa',
            'author_name' => 'Former Seminarian',
            'created_at' => '2026-02-05 09:15:00',
        ]);
    }
}

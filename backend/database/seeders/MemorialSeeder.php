<?php

namespace Database\Seeders;

use App\Models\Memorial;
use App\Models\Memory;
use App\Models\Reflection;
use Illuminate\Database\Seeder;

class MemorialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create first memorial - Eleanor Thompson
        $eleanor = Memorial::create([
            'name' => 'Eleanor Thompson',
            'slug' => 'eleanor-thompson',
            'date_of_birth' => '1942-03-15',
            'date_of_passing' => '2023-12-20',
            'dedication' => 'A beloved mother, grandmother, teacher, and friend. Eleanor touched countless lives with her gentle wisdom, endless patience, and quiet acts of kindness. Her garden bloomed with care, her home filled with warmth, and her heart always had room for one more.',
            'cover_image' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80',
        ]);

        // Eleanor's memories
        $mem1 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'I remember the way she would always have tea ready when I visited. Not just any tea—her special blend with cardamom and a hint of orange peel. She said the secret was patience. Let it steep slowly. There\'s no rushing the good things.',
            'author_name' => 'Margaret',
            'created_at' => '2024-01-15 10:30:00',
        ]);

        Reflection::create([
            'memory_id' => $mem1->id,
            'content' => 'I can still smell that tea. She made it for me once, years ago. Thank you for bringing this back.',
            'author_name' => 'Sarah',
            'created_at' => '2024-01-17 14:20:00',
        ]);

        Reflection::create([
            'memory_id' => $mem1->id,
            'content' => 'She gave me the recipe before she passed. I\'ll share it with the family if anyone would like it.',
            'author_name' => 'Margaret',
            'created_at' => '2024-01-18 09:15:00',
        ]);

        $mem2 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'quote',
            'content' => 'The best time to plant a tree was twenty years ago. The second best time is now.',
            'author_name' => 'Her favorite saying',
            'created_at' => '2024-02-03 16:45:00',
        ]);

        Reflection::create([
            'memory_id' => $mem2->id,
            'content' => 'She lived by this. Always looking forward, never dwelling on what couldn\'t be changed.',
            'created_at' => '2024-02-05 11:30:00',
        ]);

        $mem3 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'She taught me how to read when I was four. Every afternoon, we\'d sit in the garden with a picture book. She never rushed, never corrected harshly. Just gentle repetition and endless patience. I became a librarian because of those afternoons.',
            'created_at' => '2024-02-20 13:00:00',
        ]);

        $mem4 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'image',
            'content' => 'The garden in spring, 1987. She spent thirty years cultivating those roses. Said each one had a name, though she never told me what they were.',
            'media_url' => 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&auto=format&fit=crop&q=80',
            'author_name' => 'Thomas',
            'created_at' => '2024-03-10 08:20:00',
        ]);

        Reflection::create([
            'memory_id' => $mem4->id,
            'content' => 'Those roses were her pride and joy. She gave me cuttings when I moved into my first house.',
            'author_name' => 'Linda',
            'created_at' => '2024-03-12 15:45:00',
        ]);

        $mem5 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'When my father passed, she didn\'t offer words. She just came over every evening for three months and sat with me. Sometimes we talked. Mostly we didn\'t. That silence taught me more about love than any conversation could.',
            'author_name' => 'David',
            'created_at' => '2024-03-28 19:10:00',
        ]);

        Reflection::create([
            'memory_id' => $mem5->id,
            'content' => 'She did the same for my mother. Just presence. That was her gift.',
            'created_at' => '2024-03-30 10:25:00',
        ]);

        Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'quote',
            'content' => 'Be gentle with yourself. You\'re doing the best you can.',
            'author_name' => 'What she told me when I felt like a failure',
            'created_at' => '2024-04-05 12:30:00',
        ]);

        Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'She knitted blankets for every new baby in the neighborhood. Not fancy ones—simple, warm, soft. I still have the one she made for my daughter twenty years ago. It\'s worn thin in places, but we can\'t part with it.',
            'author_name' => 'Rebecca',
            'created_at' => '2024-04-18 14:00:00',
        ]);

        $mem8 = Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'image',
            'content' => 'Found this photo from the community garden project in 2015. She was 73 and still the first one there every Saturday morning.',
            'media_url' => 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&auto=format&fit=crop&q=80',
            'author_name' => 'James',
            'created_at' => '2024-04-22 09:40:00',
        ]);

        Reflection::create([
            'memory_id' => $mem8->id,
            'content' => 'I remember that day. She brought fresh lemonade for everyone.',
            'author_name' => 'Karen',
            'created_at' => '2024-04-23 16:20:00',
        ]);

        Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'She collected vintage teacups. Not expensive ones, just ones with stories. Every cup had a history—found at an estate sale, inherited from an aunt, picked up at a market in another country. She served tea in a different cup each time, and told you its story while you drank.',
            'author_name' => 'Patricia',
            'created_at' => '2024-05-01 11:15:00',
        ]);

        Memory::create([
            'memorial_id' => $eleanor->id,
            'type' => 'text',
            'content' => 'Last summer, we sat on her porch during a thunderstorm. She was 81 and not in great health, but she insisted on staying outside. "I\'ve always loved storms," she said. "They remind me that even the sky needs to cry sometimes." We sat there for an hour, not talking, just being.',
            'author_name' => 'Michael',
            'created_at' => '2024-05-15 17:30:00',
        ]);

        // Create second memorial - James Martinez
        $james = Memorial::create([
            'name' => 'James "Jamie" Martinez',
            'slug' => 'james-martinez',
            'date_of_birth' => '1985-07-22',
            'date_of_passing' => '2024-01-08',
            'dedication' => 'Jamie lived with courage, laughed often, and loved deeply. A devoted father, loyal friend, and passionate musician. He faced his illness with grace and humor, making sure those around him felt cared for even in his final days. The music plays on.',
            'cover_image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
        ]);

        // James's memories
        $jmem1 = Memory::create([
            'memorial_id' => $james->id,
            'type' => 'text',
            'content' => 'Jamie taught me guitar when I was twelve. I was terrible—clumsy fingers, no rhythm. But every Wednesday after school, he\'d sit with me in his garage for an hour. "Music isn\'t about perfection," he\'d say. "It\'s about what you feel." I played at his memorial service. It wasn\'t perfect. But I felt everything.',
            'author_name' => 'Danny',
            'created_at' => '2024-01-20 13:45:00',
        ]);

        Reflection::create([
            'memory_id' => $jmem1->id,
            'content' => 'I was there. You played beautifully. He would have been so proud.',
            'author_name' => 'Maria',
            'created_at' => '2024-01-21 10:30:00',
        ]);

        Reflection::create([
            'memory_id' => $jmem1->id,
            'content' => 'He did the same for me. Taught me piano. Changed my life.',
            'author_name' => 'Alex',
            'created_at' => '2024-01-22 15:20:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'quote',
            'content' => 'Life is too short for bad coffee and fake people.',
            'author_name' => 'Jamie\'s favorite saying',
            'created_at' => '2024-01-25 09:00:00',
        ]);

        $jmem3 = Memory::create([
            'memorial_id' => $james->id,
            'type' => 'image',
            'content' => 'Last year\'s summer music festival. He was already sick but insisted on performing. This was taken right before he went on stage. Pure joy.',
            'media_url' => 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
            'author_name' => 'Sophie',
            'created_at' => '2024-02-03 14:30:00',
        ]);

        Reflection::create([
            'memory_id' => $jmem3->id,
            'content' => 'I was there in the audience. Best performance I\'ve ever seen.',
            'author_name' => 'Tyler',
            'created_at' => '2024-02-04 11:15:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'text',
            'content' => 'He made the best pancakes. Not recipe-book perfect, but somehow exactly right. Chocolate chips, blueberries, sometimes bacon—whatever was around. His daughter would sit on the counter and "help," which mostly meant stealing chocolate chips. He never minded.',
            'author_name' => 'Lauren',
            'created_at' => '2024-02-12 08:20:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'text',
            'content' => 'We were roommates in college. He\'d practice guitar at 2 AM. I should have been annoyed, but his playing was so beautiful I\'d just lie there listening. He eventually started playing lullabies so I could fall asleep. That continued for three years.',
            'author_name' => 'Marcus',
            'created_at' => '2024-02-18 16:50:00',
        ]);

        $jmem6 = Memory::create([
            'memorial_id' => $james->id,
            'type' => 'video',
            'content' => 'Found this clip from his 35th birthday party. Listen to that laugh.',
            'media_url' => 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            'author_name' => 'Chris',
            'created_at' => '2024-02-25 12:00:00',
        ]);

        Reflection::create([
            'memory_id' => $jmem6->id,
            'content' => 'That laugh. I miss it so much.',
            'author_name' => 'Emma',
            'created_at' => '2024-02-26 09:30:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'text',
            'content' => 'When I told him I was scared about becoming a father, he said: "You won\'t get it right every time. But if you show up with love, that\'s enough." He lived that. His daughter knew she was loved every single day.',
            'author_name' => 'Robert',
            'created_at' => '2024-03-05 15:40:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'quote',
            'content' => 'Don\'t wait for the perfect moment. The moment is now. Make it perfect.',
            'author_name' => 'What he told me when I was hesitating about proposing',
            'created_at' => '2024-03-12 10:25:00',
        ]);

        Memory::create([
            'memorial_id' => $james->id,
            'type' => 'text',
            'content' => 'He never forgot a birthday. Not just family—friends, coworkers, the barista who made his coffee. He\'d send a text or call. Nothing elaborate. Just "thinking of you today." Such a small thing. Meant everything.',
            'author_name' => 'Jessica',
            'created_at' => '2024-03-20 13:10:00',
        ]);

        $jmem10 = Memory::create([
            'memorial_id' => $james->id,
            'type' => 'image',
            'content' => 'Him and his daughter at the park, teaching her to ride a bike. Three weeks before he passed. He couldn\'t run alongside her anymore, but he stood there coaching, cheering, believing in her.',
            'media_url' => 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=800&auto=format&fit=crop&q=80',
            'author_name' => 'Maria',
            'created_at' => '2024-03-28 11:55:00',
        ]);

        Reflection::create([
            'memory_id' => $jmem10->id,
            'content' => 'She rode without training wheels that day. He was so proud.',
            'author_name' => 'Sophie',
            'created_at' => '2024-03-29 14:40:00',
        ]);
    }
}

import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import abyss from '@/../images/maps/abyss.webp';

export default function Welcome({ auth }: PageProps) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <main>
            <h1>ValoBuddy</h1>
            <img src={abyss} />
        </main>
    );
}

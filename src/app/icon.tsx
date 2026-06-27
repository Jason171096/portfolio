import { ImageResponse } from 'next/og';

// Configuración del tamaño del icono
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 18,
                    background: 'linear-gradient(to right, #4f46e5, #7c3aed, #7c3aed)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '20%',
                }}
            >
                JM
            </div>
        ),
        {
            ...size,
        }
    );
}
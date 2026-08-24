import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import '@/app/(frontend)/styles.css'

import { candara } from '@/app/(frontend)/fonts'

export default async function UnderConstructionPage() {
    const headers = await getHeaders()
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Willkommen, Wandernde!</h1>
                <div className={candara.className}>
                    <p className="text-lg mb-8">Hier wird zur Zeit die Drachenwarte gebaut.</p>
                <p className="text-lg mb-8">Kommt später wieder vorbei, um Neuigkeiten aus der Drachenwarte zu erhalten!</p>
                </div>
            </div>
        </div>
    )

}


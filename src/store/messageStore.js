import { getAnswerFromIa } from '@/services/iaService'
import { create } from 'zustand'

export const useMessageStore = create((set, get) => ({
    messages: [],
    loading: false,
    sendQuestion: async ({ userQuestion }) => {

        const iaId = get().messages.length + 1


        set((state) => ({
            messages: [
                ...state.messages,
                {
                    id: state.messages.length,
                    ia: false,
                    message: userQuestion
                },
                {
                    id: iaId,
                    ia: true,
                    message: ''
                }
            ],
            loading: true
        }))


        try {
            const iaResponse = await getAnswerFromIa({ promp: userQuestion })
            set((state) => {

                const newMessages = state.messages.map((message) => {
                    if (message.id === iaId) {
                        return {
                            id: iaId,
                            ia: true,
                            message: iaResponse
                        }
                    }

                    return message
                })

                return {
                    messages: newMessages,
                    loading: false
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    resetChat: () => {
        set(() => ({ messages: [] }))
    }
}))
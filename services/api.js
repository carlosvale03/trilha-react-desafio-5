import axios from 'axios';

// password: WlAL0pimZjMNTBPr

export const api  = axios.create({
    baseURL: 'https://cfqoskxskqkplirgioqd.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcW9za3hza3FrcGxpcmdpb3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjE5MjMsImV4cCI6MjA0MDUzNzkyM30.iN0kjosUpV2EBK9SDRJ9ac90LwtmBI_TGmqmiOL_Po4",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcW9za3hza3FrcGxpcmdpb3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjE5MjMsImV4cCI6MjA0MDUzNzkyM30.iN0kjosUpV2EBK9SDRJ9ac90LwtmBI_TGmqmiOL_Po4"
    }
})

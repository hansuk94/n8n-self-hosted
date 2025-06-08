import { N8n } from 'n8n';

export default {
  async fetch(request, env, ctx) {
    const n8n = new N8n();
    
    try {
      await n8n.start();
      return new Response('n8n is running');
    } catch (error) {
      return new Response('Error starting n8n: ' + error.message, { status: 500 });
    }
  }
} 
import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(9090)
export class EventGateWay {
    @SubscribeMessage('event')
    handleEvent(client: Socket, data: string) {
        return data;
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, data: string) {

    }
}

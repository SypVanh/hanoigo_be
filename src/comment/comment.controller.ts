import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/comment.dto';
import { MyJwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(MyJwtGuard)
@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Post()
    create(
        @GetUser('id') userId: number,
        @Body() createCommentDto: CreateCommentDto) {
        return this.commentService.create(userId, createCommentDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.commentService.findOne(+id);
    }
}
import { Card, MenuCommand } from 'kbotify';
import { author } from './pixiv.author.app';
import { detail } from './pixiv.detail.app';
import { illust } from './pixiv.illust.app';
import { refresh } from './pixiv.refresh.app';
import { top } from './pixiv.top.app';

class PixivMenu extends MenuCommand {
    code = 'pixiv';
    trigger = 'pixiv';

    intro = 'Pixiv';
    menu = new Card({
        "type": "card",
        "theme": "secondary",
        "size": "lg",
        "modules": [
            {
                "type": "header",
                "text": {
                    "type": "plain-text",
                    "content": "Pixiv 命令"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "kmarkdown",
                    "content": "`.pixiv top [标签]?` 获取本周 [标签] 标签的人气前九的图片，若 [标签] 缺省则为全站排名"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "kmarkdown",
                    "content": "`.pixiv author [用户 ID]` 获取用户的最新九张插画"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "kmarkdown",
                    "content": "`.pixiv illust [插画 ID]` 获取 Pixiv 上对应 ID 的插画"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "kmarkdown",
                    "content": "`.pixiv detail [插画 ID]` 获取对应 ID 插画的详细信息（作品名、作者、标签……）"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "kmarkdown",
                    "content": "`.pixiv refresh [插画 ID]` 刷新对应 ID 插画的缓存。（当图片显示不正常时，可以在几分钟后运行此命令）"
                }
            }
        ]
    }).toString();
    useCardMenu = true; // 使用卡片菜单
}

export const pixivMenu = new PixivMenu(top, illust, detail, author, refresh);

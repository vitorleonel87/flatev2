module.exports = ({
name:"tag",
code:`$eval[$splittext[$get[i]]]
$textsplit[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getservervar[reply];{server.name};$servername];{server.icon};$servericon];{user.avatar};$authoravatar];{user.mention};<@$authorid>];{user.tag};$usertag[$authorid]];{client.ping};$pingMs];{client.cpu};$djsEval[(require('os').loadavg().reduce((a, b) => a + b, 0) / 3).toFixed(2);yes]%];{client.avatar};$useravatar[$clientid]];{server.members};$memberscount[$guildid;;yes]];{server.humans};$memberscount[$guildid;;no]];{server.bots};$botcount];{client.uptime};$uptime];{user.platform};$platform[$authorid]];{client.platform};$platform[$clientid]];{user.activity};$activity[$authorid]];{client.activity};$activity[$clientid]];~~]
$let[i;$findtextsplitindex[$message[1]]]
$onlyif[$findtextsplitindex[$message[1]]!=0;]
$textsplit[$getservervar[tags];~~]`})
import { Cheatsheet } from './cheatsheet';

export const CHEATSHEETS: Cheatsheet[] = [
  {
    product: 'Init',
    versions: ['all'],
    categories: ['OCS Cheatsheets'],
    header: 'Manual',
    key: '',
    code: '',
    description: 'Type a word to find a cheatsheet by a code.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd /home',
    description: 'перейти в директорию "/home"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd ..',
    description: 'перейти в директорию уровнем выше'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd ../..',
    description: 'перейти в директорию двумя уровнями выше'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd',
    description: 'перейти в домашнюю директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd ~user',
    description: 'перейти в домашнюю директорию пользователя user'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cd',
    key: '',
    code: 'cd -',
    description:
      'перейти в директорию, в которой находились до перехода в текущую директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'pwd',
    key: '',
    code: 'pwd',
    description: 'показать текущюю директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls',
    description: 'отобразить содержимое текущей директории'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls -F',
    description:
      'отобразить содержимое текущей директории с добавлением к именам символов, храктеризующих тип'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls -l',
    description:
      'показать детализированое представление файлов и директорий в текущей директории'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls -a',
    description: 'показать скрытые files and directories в текущей директории'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls *[0-9]*',
    description: 'показать files and directories содержащие в имени цифры'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'tree',
    key: '',
    code: 'tree',
    description: 'показать дерево файлов и директорий, начиная от корня (/)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'lstree',
    key: '',
    code: 'lstree',
    description: 'показать дерево файлов и директорий, начиная от корня (/)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'mkdir',
    key: '',
    code: 'mkdir dir1',
    description: 'создать директорию с именем "dir1"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'mkdir',
    key: '',
    code: 'mkdir dir1 dir2',
    description: 'создать две директории одновременно'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'make',
    key: '',
    code: 'mkdir -p /tmp/dir1/dir2',
    description: 'создать дерево директорий'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -f file1',
    description: 'удалить файл с именем "file1"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rmdir dir1',
    description: "удалить директорию с именем 'dir1'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -rf dir1',
    description:
      "удалить директорию с именем 'dir1' и рекурсивно всё её содержимое"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -rf dir1 dir2',
    description: 'удалить две директории и рекурсивно их содержимое'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'move',
    key: '',
    code: 'mv dir1 new_dir',
    description: 'переименовать или переместить файл или директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp file1 file2',
    description: 'сопировать файл file1 в файл file2'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp dir/* .',
    description: 'копировать все файлы директории dir в текущую директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp -a /tmp/dir1 .',
    description:
      'копировать директорию dir1 со всем содержимым в текущую директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp -a dir1 dir2',
    description: 'копировать директорию dir1 в директорию dir2'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ln',
    key: '',
    code: 'ln -s actual-folder-or-file link\nls -ld link',
    description:
      'создать и подтвердить символическую ссылку на файл или директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ln',
    key: '',
    code: 'ln file1 lnk1',
    description: 'создать "жёсткую" (физическую) ссылку на файл или директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'touch',
    key: '',
    code: 'touch -t 0712250000 fileditest',
    description:
      'модифицировать дату и время создания файла, при его отсутствии, создать файл с указанными датой и временем (YYMMDDhhmm)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find / -name file1',
    description:
      'найти files and directories с именем file1. Поиск начать с корня (/)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find / -user user1',
    description:
      'найти файл и директорию принадлежащие пользователю user1. Поиск начать с корня (/)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find /home/user1 -name "*.bin"',
    description:
      "Найти все files and directories, имена которых оканчиваются на '. bin'. Поиск начать с '/ home/user1'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find /usr/bin -type f -atime +100',
    description:
      "найти все файлы в '/usr/bin', время последнего обращения к которым  более 100 дней"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find /usr/bin -type f -mtime -10',
    description:
      "найти все файлы в '/usr/bin', созданные или изменённые в течении последних 10 дней"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: "find / -name *.rpm -exec chmod 755 '{}' \\;",
    description:
      "найти все фалы и директории, имена которых оканчиваются на '.rpm', и изменить права доступа к ним"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'find',
    key: '',
    code: 'find / -xdev -name "*.rpm"',
    description:
      "найти все фалы и директории, имена которых оканчиваются на '.rpm', игнорируя съёмные носители, такие как cdrom, floppy и т.п."
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'locate',
    key: '',
    code: 'locate "*.ps"',
    description:
      "найти все файлы, сожержащие в имени '.ps'. Предварительно рекомендуется выполнить команду 'updatedb'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'whereis',
    key: '',
    code: 'whereis halt',
    description:
      "показывает размещение бинарных файлов, исходных кодов и руководств, относящихся к файлу 'halt'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'which',
    key: '',
    code: 'which halt',
    description: "отображает полный путь к файлу 'halt'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount /dev/hda2 /mnt/hda2',
    description:
      "монтирует раздел 'hda2' в точку монтирования '/mnt/hda2'. Убедитесь в наличии директории-точки монтирования '/mnt/hda2'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'umount',
    key: '',
    code: 'umount /dev/hda2',
    description:
      "размонтирует раздел 'hda2'. Перед выполнением, покиньте '/mnt/hda2'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'fuser',
    key: '',
    code: 'fuser -km /mnt/hda2',
    description:
      'принудительное размонтирование раздела. Применяется в случае, когда раздел занят каким-либо пользователем'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'umount',
    key: '',
    code: 'umount -n /mnt/hda2',
    description:
      'выполнить размонитрование без занесения информации в /etc/mtab. Полезно когда файл имеет атрибуты "только чтение" или недостаточно места на диске'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount /dev/fd0 /mnt/floppy',
    description: 'монтировать флоппи-диск'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount /dev/cdrom /mnt/cdrom',
    description: 'монтировать CD или DVD'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount /dev/hdc /mnt/cdrecorder',
    description: 'монтировать CD-R/CD-RW или DVD-R/DVD-RW(+-)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount -o loop file.iso /mnt/cdrom',
    description: 'смонтировать ISO-образ'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount -t vfat /dev/hda5 /mnt/hda5',
    description: 'монтировать файловую систему Windows FAT32'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code:
      'mount -t smbfs -o username=user,password=pass //winclient/share /mnt/share',
    description: 'монтировать сетевую файловую систему Windows (SMB/CIFS)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'mount',
    key: '',
    code: 'mount -o bind /home/user/prg /var/ftp/user',
    description:
      '"монтирует" директорию в директорию (binding). Доступна с версии ядра 2.4.0. Полезна, например, для предоставления содержимого пользовательской директории через ftp при работе ftp-сервера в "песочнице" (chroot), когда симлинки сделать невозможно. Выполнение данной команды сделает копию содержимого /home/user/prg в /var/ftp/user'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'df',
    key: '',
    code: 'df -h',
    description:
      'отображает информацию о смонтированных разделах с отображением общего, доступного и используемого пространства (Прим.переводчика. ключ -h работает не во всех *nix systemх)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'ls',
    key: '',
    code: 'ls -lSr |more',
    description:
      'выдаёт список файлов и директорий рекурсивно с сортировкой по возрастанию размера и позволяет осуществлять постраничный просмотр'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'du',
    key: '',
    code: 'du -sh dir1',
    description:
      "подсчитывает и выводит размер, занимаемый директорией 'dir1' (Прим.переводчика. ключ -h работает не во всех *nix systemх)"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'du',
    key: '',
    code: 'du -sk * | sort -rn',
    description:
      'отображает размер и имена файлов и директорий, с соритровкой по размеру'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'rpm',
    key: '',
    code: "rpm -q -a --qf '%10{SIZE}t%{NAME}n' | sort -k1,1n",
    description:
      'показывает размер используемого дискового пространства, занимаемое файлами rpm-пакета, с сортировкой по размеру (fedora, redhat и т.п.)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Дисковое пространство'],
    header: 'dpkg-query',
    key: '',
    code: "dpkg-query -W -f='${Installed-Size;10}t${Package}n' | sort -k1,1n",
    description:
      'показывает размер используемого дискового пространства, занимаемое файлами deb-пакета, с сортировкой по размеру (ubuntu, debian т.п.)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'groupadd',
    key: '',
    code: 'groupadd group_name',
    description: 'создать новую группу с именем group_name'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'groupdel',
    key: '',
    code: 'groupdel group_name',
    description: 'удалить группу group_name'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'groupmod',
    key: '',
    code: 'groupmod -n new_group_name old_group_name',
    description: 'переименовать группу old_group_name в new_group_name'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'useradd',
    key: '',
    code:
      'useradd -c "Nome Cognome" -g admin -d /home/user1 -s /bin/bash user1',
    description:
      "создать пользователя user1, назначить ему в качестве домашнего каталога /home/user1, в качестве shell'а /bin/bash, включить его в группу admin и добавить комментарий Nome Cognome"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'useradd',
    key: '',
    code: 'useradd user1',
    description: 'создать пользователя user1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'userdel',
    key: '',
    code: 'userdel -r user1',
    description: 'удалить пользователя user1 и его домашний каталог'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'usermod',
    key: '',
    code: 'usermod -c "User FTP" -g system -d /ftp/user1 -s /bin/nologin user1',
    description: 'изменить атрибуты пользователя'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'passwd',
    key: '',
    code: 'passwd',
    description: 'сменить пароль'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'passwd',
    key: '',
    code: 'passwd user1',
    description: 'сменить пароль пользователя user1 (только root)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'chage',
    key: '',
    code: 'chage -E 2005-12-31 user1',
    description:
      'установить дату окончания действия учётной записи пользователя user1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'pwck',
    key: '',
    code: 'pwck',
    description:
      'проверить корректность системных файлов учётных записей. Проверяются файлы /etc/passwd и /etc/shadow'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'grpck',
    key: '',
    code: 'grpck',
    description:
      'проверяет корректность системных файлов учётных записей. Проверяется файл/etc/group'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа: Пользователи и группы'],
    header: 'newgrp',
    key: '',
    code: 'newgrp [-] group_name',
    description:
      'изменяет первичную группу текущего пользователя. Если указать "-", ситуация будет идентичной той, в которой пользователь вышил из системы и снова вошёл. Если не указывать группу, первичная группа будет назначена из /etc/passwd'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'ls',
    key: '',
    code: 'ls -lh',
    description:
      'просмотр полномочий на files and directories в текущей директории'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'ls',
    key: '',
    code: 'ls /tmp | pr -T5 -W$COLUMNS',
    description:
      'вывести содержимое директории /tmp и разделить вывод на пять колонок'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod ugo+rwx directory1',
    description:
      'добавить полномочия на директорию directory1 ugo(User Group Other)+rwx(Read Write eXecute) - всем полные права. Аналогичное можно сделать таким образом chmod 777 directory1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod go-rwx directory1',
    description:
      'отобрать у группы и всех остальных все полномочия на директорию directory1.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chown',
    key: '',
    code: 'chown user1 file1',
    description: 'назначить владельцем файла file1 пользователя user1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chown',
    key: '',
    code: 'chown -R user1 directory1',
    description:
      'назначить рекурсивно владельцем директории directory1 пользователя user1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chgrp',
    key: '',
    code: 'chgrp group1 file1',
    description: 'сменить группу-владельца файла file1 на group1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chown',
    key: '',
    code: 'chown user1:group1 file1',
    description: 'сменить владельца и группу владельца файла file1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'find',
    key: '',
    code: 'find / -perm -u+s',
    description: 'найти, начиная от корня, все файлы с выставленным SUID'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod u+s /bin/binary_file',
    description:
      'назначить SUID-бит файлу /bin/binary_file. Это даёт возможность любому пользователю запускать на выполнение файл с полномочиями владельца файла.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod u-s /bin/binary_file',
    description: 'снять SUID-бит с файла /bin/binary_file.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod g+s /home/public',
    description: 'назначить SGID-бит директории /home/public.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod g-s /home/public',
    description: 'снять SGID-бит с директории /home/public.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod o+t /home/public',
    description:
      'назначить STIKY-бит директории /home/public. Позволяет удалять файлы только владельцам'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod o-t /home/public',
    description: 'снять STIKY-бит с директории /home/public'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +a file1',
    description: 'позволить открывать файл на запись только в режиме добавления'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +c file1',
    description:
      'позволяет ядру автоматически сжимать/разжимать содержимое файла.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +d file1',
    description:
      "указавет утилите dump игнорировать данный файл во время выполнения backup'а"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +i file1',
    description:
      'делает файл недоступным для любых изменений: редактирование, удаление, перемещение, создание линков на него.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +s file1',
    description:
      'позволяет сделать удаление файла безопасным, т.е. выставленный атрибут s говорит о том, что при удалении файла, место, занимаемое файлом на диске заполняется нулями, что предотвращяет возможность восстановления данных.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +S file1',
    description:
      'указывает, что, при сохранении изменений, будет произведена синхронизация, как при выполнении команды sync'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chattr',
    key: '',
    code: 'chattr +u file1',
    description:
      'данный атрибут указывает, что при удалении файла содержимое его будет сохранено и при необходимости пользователь сможет его восстановить'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'lsattr',
    key: '',
    code: 'lsattr',
    description: 'показать атрибуты файлов'
  },
  {
    product: 'bzip',
    versions: ['all'],
    categories: ['archives: bzip'],
    header: 'bunzip2',
    key: '',
    code: 'bunzip2 file1.bz2',
    description: "разжимает файл 'file1.bz2'"
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gunzip',
    key: '',
    code: 'gunzip file1.gz',
    description: "разжимает файл 'file1.gz'"
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gzip',
    key: '',
    code: 'gzip file1',
    description: "сжимает файл 'file1'"
  },
  {
    product: 'bzip',
    versions: ['all'],
    categories: ['archives: bzip'],
    header: 'bzip',
    key: '',
    code: 'bzip2 file1',
    description: ''
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gzip',
    key: '',
    code: 'gzip -9 file1',
    description: 'сжать файл file1 с максимальным сжатием'
  },
  {
    product: 'rar',
    versions: ['all'],
    categories: ['archives: rar'],
    header: 'rar',
    key: '',
    code: 'rar a file1.rar test_file',
    description:
      "создать rar-архив 'file1.rar' и включить в него файл test_file"
  },
  {
    product: 'rar',
    versions: ['all'],
    categories: ['archives: rar'],
    header: 'rar',
    key: '',
    code: 'rar a file1.rar file1 file2 dir1',
    description:
      "создать rar-архив 'file1.rar' и включить в него file1, file2 и dir1"
  },
  {
    product: 'rar',
    versions: ['all'],
    categories: ['archives: rar'],
    header: 'rar',
    key: '',
    code: 'rar x file1.rar',
    description: '...'
  },
  {
    product: 'rar',
    versions: ['all'],
    categories: ['archives: rar'],
    header: 'unrar',
    key: '',
    code: 'unrar x file1.rar',
    description: 'распаковать rar-архив'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -cvf archive.tar file1',
    description: 'создать tar-архив archive.tar, содержащий файл file1'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -cvf archive.tar file1 file2 dir1',
    description:
      'создать tar-архив archive.tar, содержащий файл file1, file2 и dir1'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -tf archive.tar',
    description: 'показать содержимое архива'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -xvf archive.tar',
    description: 'распаковать архив'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -xvf archive.tar -C /tmp',
    description: 'распаковать архив в /tmp'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -cvfj archive.tar.bz2 dir1',
    description:
      'создать архив и сжать его с помощью bzip2(Прим.переводчика. ключ -j работает не во всех *nix systemх)'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -zcvf archive.tar.gz directory/ ',
    description:
      'This will tell tar to c (create) an archive from the files in directory (tar is recursive by default), compress it using the z (gzip) algorithm, store the output as a f (file) named archive.tar.gz, and v (verbosely) list all the files it adds to the archive.'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar -xvfz archive.tar.gz',
    description: 'разжать архив и распаковать его'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'zip',
    key: '',
    code: 'zip file1.zip file1',
    description: 'создать сжатый zip-архив'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'zip',
    key: '',
    code: 'zip -r file1.zip file1 file2 dir1',
    description:
      'создать сжатый zip-архив и со включением в него нескольких файлов и/или директорий'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'zip',
    key: '',
    code: 'unzip file1.zip',
    description: 'разжать и распаковать zip-архив'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -i package.deb',
    description: 'установить / обновить пакет'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -r package_name',
    description: 'удалить пакет из системы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -l',
    description: 'показать все пакеты, установленные в систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -l | grep httpd',
    description:
      'среди всех пакетов, установленных в системе, найти пакет содержащий в своём имени "httpd"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -s package_name',
    description: 'отобразить инфрмацию о конкретном пакете'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -L package_name',
    description:
      'вывести список файлов, входящих в пакет, установленный в систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg --contents package.deb',
    description:
      'отобразить список файлов, входящих в пакет, который ешё не установлен в систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -S /bin/ping',
    description: 'найти пакет, в который входит указанный файл.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get install package_name',
    description: 'установить / обновить пакет'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-cdrom',
    key: '',
    code: 'apt-cdrom install package_name',
    description: "установить / обновить пакет с cdrom'а"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get update',
    description: 'получить обновлённые списки пакетов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get upgrade',
    description: 'обновить пакеты, установленные в систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get remove package_name',
    description:
      'удалить пакет, установленный в систему с сохранением файлов конфигурации'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get purge package_name',
    description:
      'удалить пакет, установленный в систему с удалением файлов конфигурации'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get check',
    description: 'проверить целостность зависимостей'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get clean',
    description: 'удалить загруженные архивные файлы пакетов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: apt'],
    header: 'apt-get',
    key: '',
    code: 'apt-get autoclean',
    description: 'удалить старые загруженные архивные файлы пакетов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'cat',
    key: '',
    code: 'cat file1',
    description:
      'вывести содержимое файла file1 на стандартное устройсво вывода'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'tac',
    key: '',
    code: 'tac file1',
    description:
      'вывести содержимое файла file1 на стандартное устройсво вывода в обратном порядке (последняя строка становиться первой и т.д.)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'more',
    key: '',
    code: 'more file1',
    description:
      'постраничный вывод содержимого файла file1 на стандартное устройство вывода'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'less',
    key: '',
    code: 'less file1',
    description:
      'постраничный вывод содержимого файла file1 на стандартное устройство вывода, но с возможностью пролистывания в обе стороны (вверх-вниз), поиска по содержимому и т.п.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'head',
    key: '',
    code: 'head -2 file1',
    description:
      'вывести первые две строки файла file1 на стандартное устройство вывода. По-умолчанию выводится десять строк'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'tail',
    key: '',
    code: 'tail -2 file1',
    description:
      'вывести последние две строки файла file1 на стандартное устройство вывода. По-умолчанию выводится десять строк'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: Просмотр содержимого файлов'],
    header: 'tail',
    key: '',
    code: 'tail -f /var/log/messages',
    description:
      'выводить содержимое файла /var/log/messages на стандартное устройство вывода по мере появления в нём текста.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'cat',
    key: '',
    code:
      'cat file_originale | [operation: sed, grep, awk, grep и т.п.] > result.txt',
    description:
      'общий синтаксис выполнения действий по обработке содержимого файла и вывода результата в новый'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'cat',
    key: '',
    code:
      'cat file_originale | [operazione: sed, grep, awk, grepи т.п.] >> result.txt',
    description:
      'общий синтаксис выполнения действий по обработке содержимого файла и вывода результата в существующий файл. Если файл не существует, он будет создан'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'grep',
    key: '',
    code: 'grep Aug /var/log/messages',
    description:
      'из файла \'/var/log/messages\' отобрать и вывести на стандартное устройство вывода строки, содержащие "Aug"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'grep',
    key: '',
    code: 'grep ^Aug /var/log/messages',
    description:
      'из файла \'/var/log/messages\' отобрать и вывести на стандартное устройство вывода строки, начинающиеся на "Aug"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'grep',
    key: '',
    code: 'grep [0-9] /var/log/messages',
    description:
      "из файла '/var/log/messages' отобрать и вывести на стандартное устройство вывода строки, содержащие цифры"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'grep',
    key: '',
    code: 'grep Aug -R /var/log/*',
    description:
      'отобрать и вывести на стандартное устройство вывода строки, содержащие "Aug", во всех файлах, находящихся в директории /var/log и ниже'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed 's/stringa1/stringa2/g' example.txt",
    description:
      'в файле example.txt заменить "string1" на "string2", результат вывести на стандартное устройство вывода.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed '/^$/d' example.txt",
    description: 'удалить пустые строки из файла example.txt'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed '/ *#/d; /^$/d' example.txt",
    description: 'удалить пустые строки и комментарии из файла example.txt'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "echo 'esempio' | tr '[:lower:]' '[:upper:]'",
    description: 'преобразовать символы из нижнего регистра в верхний'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -e '1d' result.txt",
    description: 'удалить первую строку из файла example.txt'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -n '/string1/p'",
    description: 'отобразить только строки содержашие "string1"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -e 's/ *$//' example.txt",
    description: 'удалить пустые символы в в конце каждой строки'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -e 's/string1//g' example.txt",
    description:
      'удалить строку "string1" из текста не изменяя всего остального'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -n '1,8p;5q' example.txt",
    description:
      'взять из файла с первой по восьмую строки и из них вывести первые пять'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -n '5p;5q' example.txt",
    description: 'вывести пятую строку'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sed',
    key: '',
    code: "sed -e 's/0*/0/g' example.txt",
    description:
      'заменить последовательность из любого количества нулей одним нулём'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'cat',
    key: '',
    code: 'cat -n file1',
    description: 'пронумеровать строки при выводе содержимого файла'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'cat',
    key: '',
    code: "cat example.txt | awk 'NR%2==1'",
    description: 'при выводе содержимого файла, не выводить чётные строки файла'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'echo',
    key: '',
    code: "echo a b c | awk '{print $1}'",
    description:
      'вывести первую колонку. Разделение, по-умолчанию, по проблелу/пробелам или символу/символам табуляции'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'echo',
    key: '',
    code: "echo a b c | awk '{print $1,$3}'",
    description:
      'вывести первую и треью колонки. Разделение, по-умолчанию, по проблелу/пробелам или символу/символам табуляции'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'paste',
    key: '',
    code: 'paste file1 file2',
    description:
      'объединить содержимое file1 и file2 в виде таблицы: строка 1 из file1 = строка 1 колонка 1-n, строка 1 из file2 = строка 1 колонка n+1-m'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'paste',
    key: '',
    code: "paste -d '+' file1 file2",
    description:
      'объединить содержимое file1 и file2 в виде таблицы с разделителем "+"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sort',
    key: '',
    code: 'sort file1 file2',
    description: 'отсортировать содержимое двух файлов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sort',
    key: '',
    code: 'sort file1 file2 | uniq',
    description: 'отсортировать содержимое двух файлов, не отображая повторов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sort',
    key: '',
    code: 'sort file1 file2 | uniq -u',
    description:
      'отсортировать содержимое двух файлов, отображая только уникальные строки (строки, встречающиеся в обоих файлах, не выводятся на стандартное устройство вывода)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'sort',
    key: '',
    code: 'sort file1 file2 | uniq -d',
    description:
      'отсортировать содержимое двух файлов, отображая только повторяющиеся строки'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'comm',
    key: '',
    code: 'comm -1 file1 file2',
    description:
      "сравнить содержимое двух файлов, не отображая строки принадлежащие файлу 'file1'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'comm',
    key: '',
    code: 'comm -2 file1 file2',
    description:
      "сравнить содержимое двух файлов, не отображая строки принадлежащие файлу 'file2'"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories: text'],
    header: 'comm',
    key: '',
    code: 'comm -3 file1 file2',
    description:
      'сравнить содержимое двух файлов, удаляя строки встречающиеся в обоих файлах'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files converting'],
    header: 'dos2Unix',
    key: '',
    code: 'dos2Unix filedos.txt fileUnix.txt',
    description:
      'конвертировать файл текстового формата из MSDOS в Unix (разница в символах возврата каретки)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files converting'],
    header: 'Unix2dos',
    key: '',
    code: 'Unix2dos fileUnix.txt filedos.txt',
    description:
      'конвертировать файл текстового формата из Unix в MSDOS (разница в символах возврата коретки)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files converting'],
    header: 'recode',
    key: '',
    code: 'recode ..html < page.txt > page.html',
    description:
      'конвертировать содержимое тестового файла page.txt в html-файл page.html'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files converting'],
    header: 'recode',
    key: '',
    code: 'recode -l | more',
    description: 'вывести список доступных форматов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'badblocks',
    key: '',
    code: 'badblocks -v /dev/hda1',
    description: 'проверить раздел hda1 на наличие bad-блоков'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'fsck /dev/hda1',
    description:
      'проверить/восстановить целостность linux-файловой системы раздела hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'fsck.ext2 /dev/hda1',
    description:
      'проверить/восстановить целостность файловой системы ext2 раздела hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'e2fsck /dev/hda1',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'e2fsck -j /dev/hda1',
    description:
      'проверить/восстановить целостность файловой системы ext3 раздела hda1 с указанием, что журнал расположен там же'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'fsck.ext3 /dev/hda1',
    description:
      'проверить/восстановить целостность файловой системы ext3 раздела hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'fsck.vfat /dev/hda1',
    description:
      'проверить/восстановить целостность файловой системы fat раздела hda11'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'fsck',
    key: '',
    code: 'fsck.msdos /dev/hda1',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Анализ'],
    header: 'dosfsck',
    key: '',
    code: 'dosfsck /dev/hda1',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'mkfs',
    key: '',
    code: 'mkfs /dev/hda1',
    description: 'создать linux-файловую систему на разделе hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'mke2fs',
    key: '',
    code: 'mke2fs /dev/hda1',
    description: 'создать файловую систему ext2 на разделе hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'mke2fs',
    key: '',
    code: 'mke2fs -j /dev/hda1',
    description: 'создать журналирующую файловую систему ext3 на разделе hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'mkfs',
    key: '',
    code: 'mkfs -t vfat 32 -F /dev/hda1',
    description: 'создать файловую систему FAT32 на разделе hda1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'fdformat',
    key: '',
    code: 'fdformat -n /dev/fd0',
    description: 'форматирование флоппи-диска без проверки'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: Форматирование'],
    header: 'mkswap',
    key: '',
    code: 'mkswap /dev/hda3',
    description: 'создание swap-пространства на разделе hda3'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: SWAP'],
    header: 'mkswap',
    key: '',
    code: 'mkswap /dev/hda3',
    description: 'создание swap-пространства на разделе hda3'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: SWAP'],
    header: 'swapon',
    key: '',
    code: 'swapon /dev/hda3',
    description: 'активировать swap-пространство, расположенное на разделе hda3'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system: SWAP'],
    header: 'swapon',
    key: '',
    code: 'swapon /dev/hda2 /dev/hdb3',
    description:
      'активировать swap-пространства, расположенные на разделах hda2 и hdb3'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'dump',
    key: '',
    code: 'dump -0aj -f /tmp/home0.bak /home',
    description:
      'создать полную резервную копию директории /home в файл /tmp/home0.bak'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'dump',
    key: '',
    code: 'dump -1aj -f /tmp/home0.bak /home',
    description:
      'создать инкрементальную резервную копию директории /home в файл /tmp/home0.bak'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'restore',
    key: '',
    code: 'restore -if /tmp/home0.bak',
    description: 'восстановить из резервной копии /tmp/home0.bak'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'rsync',
    key: '',
    code: 'rsync -rogpav --delete /home /tmp',
    description: 'синхронизировать /tmp с /home'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'rsync',
    key: '',
    code: 'rsync -rogpav -e ssh --delete /home ip_address:/tmp',
    description: 'синхронизировать через ssh-туннель'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'rsync',
    key: '',
    code: 'rsync -az -e ssh --delete ip_addr:/home/public /home/local',
    description:
      'синхронизировать локальную директорию с удалённой директорией через ssh-туннель со сжатием'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'rsync',
    key: '',
    code: 'rsync -az -e ssh --delete /home/local ip_addr:/home/public',
    description:
      'синхронизировать удалённую директорию с локальной директорией через ssh-туннель со сжатием'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'dd',
    key: '',
    code: "dd bs=1M if=/dev/hda | gzip | ssh user@ip_addr 'dd of=hda.gz'",
    description:
      'сделать "слепок" локального диска в файл на удалённом компьютере через ssh-туннель'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'tar',
    key: '',
    code: 'tar -Puf backup.tar /home/user',
    description:
      "создать инкрементальную резервную копию директории '/home/user' в файл backup.tar с сохранением полномочий"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'SSH',
    key: '',
    code:
      "( cd /tmp/local/ && tar c . ) | ssh -C user@ip_addr 'cd /home/share/ && tar x -p'",
    description:
      'копирование содержимого /tmp/local на удалённый компьютер через ssh-туннель в /home/share/'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'SSH',
    key: '',
    code:
      "( tar c /home ) | ssh -C user@ip_addr 'cd /home/backup-home && tar x -p'",
    description:
      'копирование содержимого /home  на удалённый компьютер через ssh-туннель в /home/backup-home'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'tar',
    key: '',
    code: 'tar cf - . | (cd /tmp/backup ; tar xf - )',
    description:
      'копирование одной директории в другую с сохранением полномочий и линков'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'find',
    key: '',
    code:
      "find /home/user1 -name '*.txt' | xargs cp -av --target-directory=/home/backup/ --parents",
    description:
      "поиск в /home/user1 всех файлов, имена которых оканчиваются на '.txt', и копирование их в другую директорию"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'find',
    key: '',
    code:
      "find /var/log -name '*.log' | tar cv --files-from=- | bzip2 > log.tar.bz2",
    description:
      "поиск в /var/log всех файлов, имена которых оканчиваются на '.log', и создание bzip-архива из них"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'dd',
    key: '',
    code: 'dd if=/dev/hda of=/dev/fd0 bs=512 count=1',
    description:
      'создать копию MBR (Master Boot Record) с /dev/hda на флоппи-диск'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Создание резервных копий (backup)'],
    header: 'dd',
    key: '',
    code: 'dd if=/dev/fd0 of=/dev/hda bs=512 count=1',
    description: 'восстановить MBR с флоппи-диска на /dev/hda'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'cdrecord',
    key: '',
    code: 'cdrecord -v gracetime=2 dev=/dev/cdrom -eject blank=fast -force',
    description: 'clean a rewritable cdrom'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'mkisofs',
    key: '',
    code: 'mkisofs /dev/cdrom > cd.iso',
    description: 'create an iso image of cdrom on disk'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'mkisofs',
    key: '',
    code: 'mkisofs /dev/cdrom | gzip > cd_iso.gz',
    description: 'create a compressed iso image of cdrom on disk'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'mkisofs',
    key: '',
    code:
      'mkisofs -J -allow-leading-dots -R -V "Label CD" -iso-level 4 -o ./cd.iso data_cd',
    description: 'create an iso image of a directory'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'cdrecord',
    key: '',
    code: 'cdrecord -v dev=/dev/cdrom cd.iso',
    description: 'burn an ISO image'
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'gzip',
    key: '',
    code: 'gzip -dc cd_iso.gz | cdrecord dev=/dev/cdrom -',
    description: 'burn a compressed ISO image'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'mount',
    key: '',
    code: 'mount -o loop cd.iso /mnt/iso',
    description: 'mount an ISO image'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'cd-paranoia',
    key: '',
    code: 'cd-paranoia -B',
    description: 'rip audio tracks from a CD to wav files'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'cd-paranoia',
    key: '',
    code: 'cd-paranoia -- "-3"',
    description: 'rip first three audio tracks from a CD to wav files'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Периферия: CDROM'],
    header: 'cdrecord',
    key: '',
    code: 'cdrecord --scanbus',
    description: 'scan bus to identify the channel scsi'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifconfig',
    key: '',
    code: 'ifconfig eth0',
    description: 'показать конфигурацию сетевого интерфейса eth0'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifup',
    key: '',
    code: 'ifup eth0',
    description: 'активировать (поднять) интерфейс eth0'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifdown',
    key: '',
    code: 'ifdown eth0',
    description: 'деактивировать (опустить) интерфейс eth0'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifconfig',
    key: '',
    code: 'ifconfig eth0 192.168.1.1 netmask 255.255.255.0',
    description: 'выставить интерфейсу eth0 ip-адрес и маску подсети'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifconfig',
    key: '',
    code: 'ifconfig eth0 promisc',
    description:
      'перевести интерфейс eth0 в promiscuous-режим для "отлова" пакетов (sniffing)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifconfig',
    key: '',
    code: 'ifconfig eth0 -promisc',
    description: 'отключить promiscuous-режим на интерфейсе eth0'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'dhclient',
    key: '',
    code: 'dhclient eth0',
    description: 'активировать интерфейс eth0 в dhcp-режиме.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'route',
    key: '',
    code: 'route -n',
    description: 'вывести локальную таблицу маршрутизации'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'netstat',
    key: '',
    code: 'netstat -rn',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'route',
    key: '',
    code: 'route add -net 0/0 gw IP_Gateway',
    description: 'задать ip-адрес шлюза по умолчанию (default gateway)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'route',
    key: '',
    code: 'route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1',
    description:
      'добавить статический маршрут в network 192.168.0.0/16 через шлюз с ip-адресом 192.168.1.1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'route',
    key: '',
    code: 'route del 0/0 gw IP_gateway',
    description: 'удалить ip-адрес шлюза по умолчанию (default gateway)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ip_forward',
    key: '',
    code: 'echo "1" > /proc/sys/net/ipv4/ip_forward',
    description: 'разрешить пересылку пакетов (forwarding)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'hostname',
    key: '',
    code: 'hostname',
    description: 'отобразить имя компьютера'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'host',
    key: '',
    code: 'host www.linuxguide.it',
    description: 'разрешить имя www.linuxguide.it хоста в ip-адрес и наоборот'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'host',
    key: '',
    code: 'host 62.149.140.85',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ip',
    key: '',
    code: 'ip link show',
    description: 'отобразить состояние всех интерфейсов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'mii-tool',
    key: '',
    code: 'mii-tool eth0',
    description: 'отобразить статус и тип соединения для интерфейса eth0'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ethtool',
    key: '',
    code: 'ethtool eth0',
    description:
      'отображает статистику интерфеса eth0 с выводом такой информации, как поддерживаемые и текущие режимы соединения'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'netstat',
    key: '',
    code: 'netstat -tupn',
    description:
      "отображает все установленные сетевые соединения по протоколам TCP и UDP без разрешения имён в ip-адреса и PID'ы и имена процессов, обеспечивающих эти соединения"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'netstat',
    key: '',
    code: 'netstat -tupln',
    description:
      "отображает все сетевые соединения по протоколам TCP и UDP без разрешения имён в ip-адреса и PID'ы и имена процессов, слушающих порты"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'tcpdump',
    key: '',
    code: 'tcpdump tcp port 80',
    description: 'отобразить весь трафик на TCP-порт 80 (обычно - HTTP)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'iwlist',
    key: '',
    code: 'iwlist scan',
    description:
      'просканировать эфир на предмет, доступности беспроводных точек доступа'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'iwconfig',
    key: '',
    code: 'iwconfig eth1',
    description: 'показать конфигурацию беспроводного сетевого интерфейса eth1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: samba'],
    header: 'nbtscan',
    key: '',
    code: 'nbtscan ip_addr',
    description:
      'разрешить netbios-имя nbtscan не во всех systemх ставится по-умолчанию, возможно, придётся доустанавливать вручную. nmblookup включен в пакет samba.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: samba'],
    header: 'nmblookup',
    key: '',
    code: 'nmblookup -A ip_addr',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: samba'],
    header: 'smbclient',
    key: '',
    code: 'smbclient -L ip_addr/hostname',
    description:
      'отобразить ресурсы, предоставленные в общий доступ на windows-машине'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: samba'],
    header: 'smbget',
    key: '',
    code: 'smbget -Rr smb://ip_addr/share',
    description:
      'подобно wget может получить файлы с windows-машин через smb-протокол'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: samba'],
    header: 'mount',
    key: '',
    code:
      'mount -t smbfs -o username=user,password=pass //winclient/share /mnt/share',
    description:
      'смонтировать smb-ресурс, предоставленный на windows-машине, в локальную файловую систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -nL',
    description: 'отобразить все цепочки правил'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -nL',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t nat -L',
    description: 'отобразить все цепочки правил в NAT-таблице'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -F',
    description: 'очистить все цепочки правил в filter-таблице'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -F',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t nat -F',
    description: 'очистить все цепочки правил в NAT-таблице'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -X',
    description: 'удалить все пользовательские цепочки правил в filter-таблице'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -A INPUT -p tcp --dport telnet -j ACCEPT',
    description: 'позволить входящее подключение telnet\'ом'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -A OUTPUT -p tcp --dport http -j DROP',
    description: 'блокировать исходящие HTTP-соединения'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -A FORWARD -p tcp --dport pop3 -j ACCEPT',
    description: 'позволить "прокидывать" (forward) POP3-соединения'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t filter -A INPUT -j LOG --log-prefix "DROP INPUT"',
    description:
      'включить журналирование ядром пакетов, проходящих через цепочку INPUT, и добавлением к сообщению префикса "DROP INPUT"'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code: 'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE',
    description:
      'включить NAT (network Address Translate) исходящих пакетов на интерфейс eth0. Допустимо при использовании с динамически выделяемыми ip-адресами.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: iptables'],
    header: 'iptables',
    key: '',
    code:
      'iptables -t nat -A PREROUTING -d 192.168.0.1 -p tcp -m tcp --dport 22 -j DNAT --to-destination 10.0.0.2:22',
    description:
      'перенаправление пакетов, адресованных одному хосту, на другой хост'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'top',
    key: '',
    code: 'top',
    description:
      'отобразить запущенные процессы, используемые ими ресурсы и другую полезную информацию (с автоматическим обновлением данных)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'ps',
    key: '',
    code: 'ps -eafw',
    description:
      'отобразить запущенные процессы, используемые ими ресурсы и другую полезную информацию (единожды)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'ps',
    key: '',
    code: 'ps -e -o pid,args --forest',
    description: "вывести PID'ы и процессы в виде дерева"
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'pstree',
    key: '',
    code: 'pstree',
    description: 'отобразить дерево процессов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'kill',
    key: '',
    code: 'kill -9 98989',
    description:
      '"убить" процесс с PID 98989 "на смерть" (без соблюдения целостности данных)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'kill',
    key: '',
    code: 'kill -KILL 98989',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'kill',
    key: '',
    code: 'kill -TERM 98989',
    description: 'Корректно завершить процесс с PID 98989'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'kill',
    key: '',
    code: 'kill -1 98989',
    description: 'заставить процесс с PID 98989 перепрочитать файл конфигурации'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'kill',
    key: '',
    code: 'kill -HUP 98989',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'lsof',
    key: '',
    code: 'lsof -p 98989',
    description: 'отобразить список файлов, открытых процессом с PID 98989'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'lsof',
    key: '',
    code: 'lsof /home/user1',
    description: 'отобразить список открытых файлов из директории /home/user1'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'strace',
    key: '',
    code: 'strace -c ls >/dev/null',
    description:
      'вывести список системных вызовов, созданных и полученных процессом ls'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'strace',
    key: '',
    code: 'strace -f -e open ls >/dev/null',
    description: 'вывести вызовы бибилотек'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'watch',
    key: '',
    code: "watch -n1 'cat /proc/interrupts'",
    description: 'отображать прерывания в режиме реального времени'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'last',
    key: '',
    code: 'last reboot',
    description: 'отобразить историю перезагрузок системы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'last',
    key: '',
    code: 'last user1',
    description:
      'отобразить историю регистрации пользователя user1 в системе и время его нахождения в ней'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'lsmod',
    key: '',
    code: 'lsmod',
    description: 'вывести загруженные модули ядра'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'free',
    key: '',
    code: 'free -m',
    description: 'показать состояние оперативной памяти в мегабайтах'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'smartctl',
    key: '',
    code: 'smartctl -A /dev/hda',
    description: 'контроль состояния жёсткого диска /dev/hda через SMART'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'smartctl',
    key: '',
    code: 'smartctl -i /dev/hda',
    description: 'проверить доступность SMART на жёстком диске /dev/hda'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'tail',
    key: '',
    code: 'tail /var/log/dmesg',
    description: 'вывести десять последних записей из журнала загрузки ядра'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: monitoring and debugging'],
    header: 'tail',
    key: '',
    code: 'tail /var/log/messages',
    description: 'вывести десять последних записей из системного журнала'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'apropos',
    key: '',
    code: 'apropos ...keyword',
    description:
      'выводит список комманд, которые так или иначе относятся к ключевым словам. Полезно, когда вы знаете что делает программа, но не помните команду'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'man',
    key: '',
    code: 'man ping',
    description:
      'вызов руководства по работе с программой, в данном случае, - ping'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'whatis',
    key: '',
    code: 'whatis ...keyword',
    description: 'отображает описание действий указанной программы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'mkbootdisk',
    key: '',
    code: 'mkbootdisk --device /dev/fd0 `uname -r`',
    description: 'создаёт загрузочный флоппи-диск'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'gpg',
    key: '',
    code: 'gpg -c file1',
    description: 'шифрует файл file1 с помощью GNU Privacy Guard'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'gpg',
    key: '',
    code: 'gpg file1.gpg',
    description: 'дешифрует файл file1 с помощью GNU Privacy Guard'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: wget'],
    header: 'wget',
    key: '',
    code: 'wget -r www.example.com',
    description: 'загружает рекурсивно содержимое сайта www.example.com'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: wget'],
    header: 'wget',
    key: '',
    code: 'wget -c www.example.com/file.iso',
    description:
      'загрузить файл www.example.com/file.iso с возможностью останова и продолжения в последствии'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network: wget'],
    header: 'wget',
    key: '',
    code: "echo 'wget -c www.example.com/files.iso' | at 09:00",
    description: 'начать закачку в указанное время'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'ldd',
    key: '',
    code: 'ldd /usr/bin/ssh',
    description: 'вывести список библиотек, необходимых для работы ssh'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды'],
    header: 'alias',
    key: '',
    code: "alias hh='history'",
    description: 'назначить алиас hh команде history'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls',
    description: 'список файлов и каталогов'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'ls',
    key: '',
    code: 'ls -al',
    description: 'форматированный список со скрытыми каталогами и файлами'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'directory',
    key: '',
    code: 'pwd',
    description: 'показать текущий каталог'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'mkdir',
    key: '',
    code: 'mkdir dir',
    description: 'создать каталог dir'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm file',
    description: 'удалить file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -r dir',
    description: 'удалить каталог dir'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -f file',
    description: 'удалить форсированно file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'remove',
    key: '',
    code: 'rm -rf dir',
    description: 'удалить форсированно каталог dir'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp file1 file2',
    description: 'скопировать file1 в file2'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cp',
    key: '',
    code: 'cp -r dir1 dir2',
    description:
      'скопировать dir1 в dir2; создаст каталог dir2, если он не существует'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'mv',
    key: '',
    code: 'mv file1 file2',
    description:
      'переименовать или переместить file1 в file2. если file2 существующий каталог - переместить file1 в каталог file2'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'touch',
    key: '',
    code: 'touch file',
    description: 'создать file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'cat',
    key: '',
    code: 'cat > file',
    description: 'направить стандартный ввод в file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'more',
    key: '',
    code: 'more file',
    description: 'вывести содержимое file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'head',
    key: '',
    code: 'head file',
    description: 'вывести первые 10 строк file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'tail',
    key: '',
    code: 'tail file',
    description: 'вывести последние 10 строк file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'tail',
    key: '',
    code: 'tail -f file',
    description:
      'вывести содержимое file по мере роста, начинает с последних 10 строк'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'ps',
    key: '',
    code: 'ps',
    description: 'вывести ваши текущие активные процессы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'top',
    key: '',
    code: 'top',
    description: 'показать все запущенные процессы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'kill',
    key: '',
    code: 'kill pid',
    description: 'убить процесс с id pid'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'killall',
    key: '',
    code: 'killall proc',
    description: 'убить все процессы с именем proc'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'bg',
    key: '',
    code: 'bg',
    description:
      'список остановленных и фоновых задач; продолжить выполнение остановленной задачи в фоне'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'fg',
    key: '',
    code: 'fg',
    description: 'выносит на передний план последние задачи'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: processes managment'],
    header: 'fg',
    key: '',
    code: 'fg n',
    description: 'вынести задачу n на передний план'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'chmod octal file ',
    description:
      'сменить права file на octal, раздельно для пользователя, группы и для всех добавлением: 4 - чтение (r), 2 - запись (w), 1 - исполнение (x)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code: 'ssh user@host',
    description: 'подключится к host как user'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code: 'ssh -p port user@host',
    description: 'подключится к host на порт port как user'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'ssh-copy-id',
    key: '',
    code: 'ssh-copy-id user@host',
    description:
      'добавить ваш ключ на host для user чтобы включить логин без пароля и по ключам'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'grep',
    key: '',
    code: 'grep pattern files',
    description: 'искать pattern в files'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'grep',
    key: '',
    code: 'grep -r pattern dir',
    description: 'искать рекурсивно pattern в dir'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'grep',
    key: '',
    code: 'command | grep pattern',
    description: 'искать pattern в выводе command'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['files and directories'],
    header: 'locate',
    key: '',
    code: 'locate file',
    description: 'найти все файлы с именем file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'date',
    key: '',
    code: 'date',
    description: 'вывести текущую дату и время'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cal',
    key: '',
    code: 'cal',
    description: 'вывести календарь на текущий месяц'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'uptime',
    key: '',
    code: 'uptime',
    description: 'показать текущий аптайм'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'w',
    key: '',
    code: 'w ',
    description: 'показать пользователей онлайн'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'whoami',
    key: '',
    code: 'whoami',
    description: 'имя, под которым вы залогинены'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'finger',
    key: '',
    code: 'finger user',
    description: 'показать информацию о user'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'uname',
    key: '',
    code: 'uname -a',
    description: 'показать информацию о ядре'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/cpuinfo',
    description: 'информация ЦПУ'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/meminfo',
    description: 'информация о памяти'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'man',
    key: '',
    code: 'man commandd',
    description: 'показать мануал для comman'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'df',
    key: '',
    code: 'df',
    description: 'показать инф. о использовании дисков'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'du',
    key: '',
    code: 'du',
    description: 'вывести -вес- текущего каталога'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'free',
    key: '',
    code: 'free',
    description: 'использование памяти и swap'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'whereis',
    key: '',
    code: 'whereis app',
    description: 'возможное расположение программы app'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'which',
    key: '',
    code: 'which app',
    description: 'какая app будет запущена по умолчанию'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar cf file.tar files',
    description: 'создать tar-архив с именем file.tar содержащий files'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar xf file.tar ',
    description: 'распаковать file.tar'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar czf file.tar.gz files',
    description: 'создать архив tar с сжатием Gzip'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar xzf file.tar.gz',
    description: 'распаковать tar с Gzip'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar cjf file.tar.bz2',
    description: 'создать архив tar с сжатием Bzip2'
  },
  {
    product: 'tar',
    versions: ['all'],
    categories: ['archives'],
    header: 'tar',
    key: '',
    code: 'tar xjf file.tar.bz2',
    description: 'распаковать tar с Bzip2'
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gzip',
    key: '',
    code: 'gzip file',
    description: 'сжать file и переименовать в file.gz'
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gzip',
    key: '',
    code: 'gzip -d file.gz',
    description: 'разжать file.gz в file'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ping',
    key: '',
    code: 'ping host',
    description: 'пропинговать host и вывести результат'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'whois',
    key: '',
    code: 'whois domain',
    description: 'получить информацию whois для domain'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'dig',
    key: '',
    code: 'dig domain',
    description: 'получить DNS информацию domain'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'dig',
    key: '',
    code: 'dig -x host',
    description: 'реверсивно искать host'
  },
  {
    product: 'wget',
    versions: ['all'],
    categories: ['network: wget'],
    header: 'wget',
    key: '',
    code: 'wget file',
    description: 'скачать file'
  },
  {
    product: 'wget',
    versions: ['all'],
    categories: ['network: wget'],
    header: 'wget',
    key: '',
    code: 'wget -c file',
    description: 'продолжить остановленную закачку'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages'],
    header: 'configure',
    key: '',
    code: './configure',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages'],
    header: 'make',
    key: '',
    code: 'make',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages'],
    header: 'make',
    key: '',
    code: 'make install',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: deb'],
    header: 'dpkg',
    key: '',
    code: 'dpkg -i pkg.deb',
    description: 'установить пакет (debian)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['packages: rpm'],
    header: 'rpm',
    key: '',
    code: 'rpm -Uvh pkg.rpm',
    description: 'установить пакет (rpm)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'Ctrl+C',
    description: 'завершить текущую команду'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'Ctrl+Z',
    description:
      'остановить текущую команду, продолжть с fg на переднем плане или bg в фоне'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'Ctrl+D',
    description: 'разлогиниться, тоже самое, что и exit'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'Ctrl+W',
    description: 'удалить одно слово в текущей строке'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'Ctrl+U',
    description: 'удалить строку'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: '!!',
    description: 'повторить последнюю команду'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Другие полезные команды: Клавиатурные сочетания'],
    header: 'keyboard shortcuts',
    key: '',
    code: 'exit',
    description: 'разлогиниться'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'df',
    key: '',
    code: 'df -h',
    description: 'Узнать свободное место'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'cd',
    key: '',
    code: 'cd /path',
    description: 'Поменять директорию'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'cp',
    key: '',
    code: 'cp /path_source/file /path_target',
    description: 'Копировать'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'rm',
    key: '',
    code: 'rm /path/file',
    description: 'Удалить'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['file system'],
    header: 'touch',
    key: '',
    code: 'touch /path/file',
    description: 'Создать файл'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chown',
    key: '',
    code: 'chown -R user:group /path',
    description: 'Поменять атрибуты у папок и файлов в указанной директории'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'find /path -type f -exec chmod -R 644 {} \\;',
    description: 'Поменять права у всех папок на 644'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Права доступа'],
    header: 'chmod',
    key: '',
    code: 'find /path -type d -exec chmod -R 755 {} \\;',
    description: 'Поменять права у всех файлов на 755'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'zip',
    key: '',
    code: 'zip file.zip /path/file',
    description: 'Создать архив zip из файла'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'zip',
    key: '',
    code: 'zip -r folder.zip ./',
    description: 'Создать архив zip из папки (включая подпапки)'
  },
  {
    product: 'zip',
    versions: ['all'],
    categories: ['archives: zip'],
    header: 'unzip',
    key: '',
    code: 'unzip /path/file.zip',
    description: 'Распаковать архив zip'
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gzip',
    key: '',
    code: 'gzip file.gz /path/file',
    description: 'Создать архив gzip из файла (с удалением целевого файла)'
  },
  {
    product: 'gzip',
    versions: ['all'],
    categories: ['archives: gzip'],
    header: 'gunzip',
    key: '',
    code: 'gunzip /path/file.gz',
    description: 'Распаковать архив gz (с удалением архива)'
  },
  {
    product: 'lrzip',
    versions: ['all'],
    categories: ['archives: lrzip'],
    header: 'lrzip',
    key: '',
    code: 'lrzip file',
    description: 'Создать архив lrz из файла'
  },
  {
    product: 'lrzip',
    versions: ['all'],
    categories: ['archives: lrzip'],
    header: 'lrzip',
    key: '',
    code: 'lrzip -d file.lzr',
    description: 'Распаковать архив lrz'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ifconfig',
    key: '',
    code: 'ifconfig',
    description: 'Показать сетевой интерфейс'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'ping',
    key: '',
    code: 'ping origin-creative-studio.com',
    description: 'Проверить доступность сайта'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'traceroute',
    key: '',
    code: 'traceroute origin-creative-studio.com',
    description: 'Показать маршрут до указанного адреса'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['network'],
    header: 'dns',
    key: '',
    code: 'mcedit /etс/resolve.conf',
    description: 'Прописать или узнать DNS-адреса'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['users'],
    header: 'users',
    key: '',
    code: 'SELECT User FROM mysql.user;',
    description: 'Get a list of MySQL user accounts'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['network'],
    header: 'check',
    key: '',
    code: 'netstat -tap | grep mysql',
    description: 'Проверить работу mysql'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['export'],
    header: 'mysqldump',
    key: '',
    code: 'mysqldump -u <mysql_user> -p <database> > /home/db_dump.sql',
    description: 'Сделать экспорт БД'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['databases'],
    header: 'mysql> CREATE',
    key: '',
    code:
      'mysql> CREATE DATABASE <database> CHARACTER SET utf8 COLLATE utf8_bin;',
    description: 'Создать БД'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['databases'],
    header: 'mysql> CREATE',
    key: '',
    code:
      "mysql> CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';\nGRANT ALL ON my_db.* TO 'new_user'@'localhost';\nFLUSH PRIVILEGES;",
    description: 'Create MySQL user'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['databases'],
    header: 'mysqladmin',
    key: 'mysqladmin',
    code: 'mysqladmin -u root -p drop {{database}}',
    description: 'Drop a DB'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['import'],
    header: 'mysql',
    key: '',
    code: 'mysql -u {{mysql_user}} -p {{database}} < /home/db_dump.sql',
    description: 'Сделать импорт БД'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['auth'],
    header: 'mysql',
    key: '',
    code: 'mysql -u {{mysql_user}} -p',
    description: 'Авторизоваться в mysql'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['version'],
    header: '>select',
    key: '',
    code: 'mysql> SELECT version();',
    description: 'Посмотреть версию mysql'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['databases'],
    header: 'mysql> USE',
    key: '',
    code: 'mysql> USE {{database}};',
    description: 'Выбрать БД в mysql'
  },
  {
    product: 'mysql',
    versions: ['all'],
    categories: ['databases'],
    header: 'mysql> CREATE',
    key: '',
    code: 'mysql> CREATE TABLE table_name (column_name column_type);',
    description: 'Создать таблицу table_name с типом column_type'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code: 'ssh-keygen -t rsa',
    description: 'Сгенерировать ssh-ключ'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code:
      'ssh-keygen -t rsa -b 4096 -C "your_email@origin-creative-studio.com"',
    description: 'Сгенерировать ssh-ключ'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code:
      'cat /home/username/.ssh/id_dsa.pub >> /home/username/.ssh/authorized_keys',
    description: 'Добавить ssh-ключ в authorized_keys'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: '',
    code: 'chmod 600 /home/username/.ssh/authorized_keys',
    description: 'Установить права на authorized_keys'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: 'ssh-agent',
    code: 'eval `ssh-agent -s`',
    description: 'Запустить ssh-агент'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'SSH',
    key: 'ssh-add',
    code: 'ssh-add /home/username/.ssh/id_rsa',
    description: 'Добавить ключ в ssh-агент'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: 'list',
    code: 'crontab -l',
    description: 'Просмотреть задания, которые уже добавлены в ваш cron файл'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: 'edit',
    code: 'crontab -e',
    description: 'Добавить новое задание в ваш cron файл'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: '',
    code: '* * * * * /usr/bin/php /home/user/script.php',
    description:
      '*№1 Минуты (0 - 59), *№2 Часы (0 - 23), *№3 День месяца (0 - 31), *№4 Месяц (1 -12), *№5 День недели (0 - 6, 0 - воскресенье)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: '',
    code: '0 0,2,4,6,8,10,12,14,16,18,20,22 * * * /path/to/shell-script.sh',
    description: 'Запускать каждые 2 часа'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: '',
    code: '0 */2 * * * /path/to/shell-script.sh',
    description: 'Запускать каждые 2 часа с помощью crontab'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['cron'],
    header: 'crontab',
    key: '',
    code: '* * * * * /usr/bin/php /home/user/script.php',
    description: 'Запускать php-скрипт'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'arch',
    key: '',
    code: 'arch',
    description: 'отобразить архитектуру компьютера'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'uname',
    key: '',
    code: 'uname -m',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'uname',
    key: '',
    code: 'uname -r',
    description: 'отобразить используемую версию ядра'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'dmidecode',
    key: '',
    code: 'dmidecode -q',
    description: 'показать аппаратные системные компоненты - (SMBIOS / DMI)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'hdparm',
    key: '',
    code: 'hdparm -i /dev/hda',
    description: 'вывести характеристики жесткого диска'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'hdparm',
    key: '',
    code: 'hdparm -tT /dev/sda',
    description:
      'протестировать производительность чтения данных с жесткого диска'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/cpuinfo',
    description: 'отобразить информацию о процессоре'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/interrupts',
    description: 'показать прерывания'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/meminfo',
    description: 'проверить использование памяти'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/swaps',
    description: 'показать файл(ы) подкачки'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/version',
    description: 'вывести версию ядра'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/net/dev',
    description: 'показать сетевые интерфейсы и статистику по ним'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cat',
    key: '',
    code: 'cat /proc/mounts',
    description: 'отобразить смонтированные файловые системы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'lspci',
    key: '',
    code: 'lspci -tv',
    description: 'показать в виде дерева PCI устройства'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'lsusb',
    key: '',
    code: 'lsusb -tv',
    description: 'показать в виде дерева USB устройства'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'date',
    key: '',
    code: 'date',
    description: 'вывести системную дату'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'cal',
    key: '',
    code: 'cal 2007',
    description: 'вывести таблицу-календарь 2007-го года'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'date',
    key: '',
    code: 'date 041217002007.00',
    description:
      'установить системные дату и время ММДДЧЧммГГГГ.СС (МесяцДеньЧасМинутыГод.Секунды)'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system: Информация о системе'],
    header: 'clock',
    key: '',
    code: 'clock -w',
    description: 'сохранить системное время в BIOS'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'shutdown',
    key: '',
    code: 'shutdown -h now',
    description: 'Остановить систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'init',
    key: '',
    code: 'init 0',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'telinit',
    key: '',
    code: 'telinit 0',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'shutdown',
    key: '',
    code: 'shutdown -h hours:minutes &',
    description: 'запланировать остановку системы на указанное время'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'shutdown',
    key: '',
    code: 'shutdown -c',
    description: 'отменить запланированную по расписанию остановку системы'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'shutdown',
    key: '',
    code: 'shutdown -r now',
    description: 'перегрузить систему'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'reboot',
    key: '',
    code: 'reboot',
    description: ''
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['system'],
    header: 'logout',
    key: '',
    code: 'logout',
    description: 'выйти из системы'
  },
  {
    product: 'html',
    versions: ['all'],
    categories: ['flash'],
    header: 'object',
    key: '',
    code:
      '<object type="application/x-shockwave-flash" data="myclip.swf">\n<param name="movie" value="myclip.swf" />\n<param name="quality" value="high" />\n<!-- Sandwich the embed tag inside the object tag -->\n<embed src="myclip.swf" quality="high" />\n</object>',
    description: 'flash-object, crossbrowser'
  },
  {
    product: 'css',
    versions: ['all'],
    categories: ['fonts'],
    header: 'font-family',
    key: '',
    code:
      'font-family: "Arial Black", "Helvetica CY", "Nimbus Sans L" sans-serif;\nfont-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;\nfont-family: "Comic Sans MS", "Monaco CY", cursive;\nfont-family: "Courier New", "Nimbus Mono L", monospace;\nfont-family: Georgia, "Century Schoolbook L", Serif;\nfont-family: Impact, "Charcoal CY", sans-serif;\nfont-family: "Lucida Console", Monaco, monospace;\nfont-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;\nfont-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;\nfont-family: Tahoma, "Geneva CY", sans-serif;\nfont-family: "Times New Roman", "Times CY", "Nimbus Roman No9 L", serif;\nfont-family: "Trebuchet MS", "Helvetica CY", sans-serif;\nfont-family: Verdana, "Geneva CY", "DejaVu Sans", sans-serif;',
    description: 'web-safe fonts'
  },
  {
    product: 'php',
    versions: ['all'],
    categories: ['errors'],
    header: 'ini_set',
    key: '',
    code:
      "ini_set('error_reporting', E_ALL);\nini_set('display_errors', 1);\nini_set('display_startup_errors', 1);",
    description: 'отобразить ошибки'
  },
  {
    product: 'php',
    versions: ['all'],
    categories: ['errors'],
    header: 'exists',
    key: '',
    code: "if (isset($var) && !empty($var)) {\necho 'var exists';\n}",
    description: 'существует ли переменная'
  },
  {
    product: 'php',
    versions: ['all'],
    categories: ['links'],
    header: '',
    key: '',
    code:
      "<?php\nheader('Location: http://www.origin-creative-studio.com/');\nexit;\n?>",
    description: 'перенаправление'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH'],
    header: 'scp',
    key: '',
    code: 'scp -C username@hostname:/path/to/remote/file /path/to/local/dir',
    description:
      'copy file from remote host (hostname is, for example, ip-address) to local directory'
  },
  {
    product: 'html',
    versions: ['all'],
    categories: ['head'],
    header: 'script',
    key: '',
    code: '<script src="scripts.js"></script>',
    description: 'link to js-file'
  },
  {
    product: 'html',
    versions: ['all'],
    categories: ['head'],
    header: 'script',
    key: '',
    code:
      '<script>\nfunction myFunction() {\ndocument.getElementById("demo").innerHTML = "Paragraph changed.";\n}\n</script>',
    description: 'embedded js'
  },
  {
    product: 'html',
    versions: ['all'],
    categories: ['head'],
    header: 'link',
    key: '',
    code: '<link rel="stylesheet" href="styles.css"> ',
    description: 'link to css-file'
  },
  {
    product: 'html',
    versions: ['all'],
    categories: ['head'],
    header: 'style',
    key: '',
    code: '<style>\nh1 {color: red;}\np {color: blue;}\n</style>',
    description: 'embedded css'
  },
  {
    product: 'angularjs',
    versions: ['all'],
    categories: ['html'],
    header: 'ng-app',
    key: '',
    code: '<div ng-app="myApp" ng-controller="myCtrl"></div>',
    description: 'init app'
  },
  {
    product: 'angularjs',
    versions: ['all'],
    categories: ['cookies'],
    header: '$cookieStore',
    key: '',
    code: "$cookieStore.get('cookieName');",
    description: 'get cookie object'
  },
  {
    product: 'angularjs',
    versions: ['all'],
    categories: ['js'],
    header: 'controller',
    key: '',
    code:
      "var app = angular.module('myApp', []);\napp.controller('myCtrl', function($scope) {\n//some code\n});",
    description: 'init controller'
  },
  {
    product: 'js',
    versions: ['all'],
    categories: ['css'],
    header: 'element.classList',
    key: '',
    code: 'element.classList.add("ok", "understand");',
    description: 'add classes'
  },
  {
    product: 'js',
    versions: ['all'],
    categories: ['css'],
    header: 'element.classList',
    key: '',
    code: 'element.classList.remove("ok", "understand");',
    description: 'remove classes'
  },
  {
    product: 'js',
    versions: ['all'],
    categories: ['css'],
    header: 'element.classList',
    key: '',
    code: 'element.classList.contains("example"));',
    description: 'check classes'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['let', 'var'],
    header: 'let',
    key: 'let',
    code:
      'function fn () { let x = 0; if (true) { let x = 1 // only inside this `if` } }',
    description: 'let is the new var.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['const', 'var'],
    header: 'const',
    key: 'const',
    code: 'const a = 1',
    description: 'Constants work just like let, but can’t be reassigned.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['method', 'string'],
    header: 'string.repeat',
    key: '',
    code: '"hello".repeat(3)',
    description: 'string method.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['method', 'string'],
    header: 'string.includes',
    key: '',
    code: '"hello".includes("ll")',
    description: 'string method.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['method', 'string'],
    header: 'string.normalize',
    key: '',
    code: '"\\u1E9B\\u0323".normalize("NFC")',
    description: 'string method.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['operator', 'math'],
    header: 'math.exponent',
    key: '',
    code: 'const byte = 2 ** 8',
    description: 'Exponent operator. Same as: Math.pow(2, 8)'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['class'],
    header: 'class',
    key: '',
    code: 'constructor (radius) { this.radius = radius }',
    description: 'Class constructor'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['class'],
    header: 'class',
    key: '',
    code: 'getArea () { return Math.PI *2 * this.radius }',
    description: 'Class method'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['class'],
    header: 'class',
    key: '',
    code: 'expand (n) { return super.expand(n) * Math.PI }',
    description: 'Calling superclass methods'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['class'],
    header: 'class',
    key: '',
    code:
      'static createFromDiameter(diameter) { return new Circle(diameter /2) }',
    description: 'Static methods'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['class'],
    header: 'class',
    key: '',
    code: 'class Circle extends Shape {}',
    description: 'class and it extends'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['promise'],
    header: 'promise',
    key: '',
    code:
      'new Promise((resolve, reject) => { if (ok){ resolve(result) } else { reject(error) } })',
    description: 'Making promises for asynchronous programming.'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['promise'],
    header: 'promise',
    key: '',
    code: 'promise.then((result) =>{ ··· }).catch((error) =>{ ··· })',
    description: 'Using promises'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['promise'],
    header: 'promise',
    key: '',
    code:
      'Promise.all(···)\nPromise.race(···)\nPromise.reject(···)\nPromise.resolve(···)',
    description: 'Promise functions'
  },
  {
    product: 'js',
    versions: ['es6'],
    categories: ['async', 'await'],
    header: 'async',
    key: '',
    code:
      'async function run () { const user = await getUsers(); const tweets = await getTweets(user); return[user, tweets]; }',
    description: 'async functions are another way of using functions.'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['putty'],
    header: 'pageant',
    key: '',
    code: 'C:\\Users\\Username\\Putty\\pageant.exe ssh-key1.ppk ssh-key2.ppk',
    description:
      'Нужно вставить этот код в "Свойства" pageant.exe -> вкладка "Ярлык" -> поле "Объект". При запуске pageant.exe все ssh-ключи автоматически загрузятся.'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['scripts'],
    header: '7zip',
    key: '',
    code:
      'cd C:\\Program Files\\7-Zip\n7z.exe a -tzip C:\\Users\\path\\to\\new_archive.zip C:\\target\\file_or_directory',
    description: 'Используем для архивации 7z.'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['scripts'],
    header: 'time',
    key: '',
    code:
      'IF "%time:~0,1%" LSS "1" (\nSET DATETIME=%date:~6,4%-%date:~3,2%-%date:~0,2%-0%time:~1,1%-%time:~3,2%-%time:~6,2%\n) ELSE (\nSET DATETIME=%date:~6,4%-%date:~3,2%-%date:~0,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%\n)',
    description: 'Получаем timestamp вида YYYY-MM-DD-HH-MM-SS.'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['system'],
    header: 'shell',
    key: '',
    code: 'shell:startup',
    description: 'Добавить в автозагрузку пользователя'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['system'],
    header: 'shell',
    key: '',
    code: 'shell:common startup',
    description: 'Добавить в автозагрузку всех пользователей'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['windows', 'services'],
    header: 'Windows services',
    key: 'service',
    code: 'C:\\Tor\\tor.exe --service install',
    description: 'Install a program as a service'
  },
  {
    product: 'java',
    versions: ['all'],
    categories: ['method'],
    header: 'dates',
    key: '',
    code:
      '(month_days = new int[3];\n) (month_days[0] = 31;\n) (month_days[1] = 30;\n) (month_days[2] = 29;\n)  (System.out.println("В апреле  "+ month_days[3] + " дней.");\n)',
    description: 'Программа которая создает массив числа дней в каждом месяце.'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['cmder'],
    header: 'tasks',
    key: '',
    code:
      '*cmd /k "%SYSTEMROOT%\\System32\\bash.exe" -new_console:d:%USERPROFILE%',
    description:
      'Добавить в меню "Bash on Windows" (Settings -> Startup -> Tasks).'
  },
  {
    product: 'windows',
    versions: ['all'],
    categories: ['cmder'],
    header: 'tasks',
    key: '',
    code:
      'cmd /k "%ConEmuDir%\\..\\init.bat"  -new_console:d:C:\\tools\\mysql\\current\\bin',
    description: 'Добавить в меню "MySQL" (Settings -> Startup -> Tasks).'
  },
  {
    product: 'jquery',
    versions: ['all'],
    categories: ['version'],
    header: 'version',
    key: '',
    code: '$ === jQuery',
    description: 'Наличие JQuery (консоль).'
  },
  {
    product: 'jquery',
    versions: ['all'],
    categories: ['version'],
    header: 'version',
    key: '',
    code: '$().jquery',
    description: 'Версия JQuery (консоль).'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['tag'],
    header: 'tag',
    key: 'tag',
    code: 'git tag | xargs git tag -d',
    description: 'Remove all git-tags.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['init'],
    header: 'init',
    key: 'init',
    code: 'git init folder-name',
    description: 'создать новый проект в указанной папке'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['config'],
    header: 'config',
    key: 'config',
    code: 'git config --global core.autocrlf true',
    description: 'Configure Git on Windows to properly handle line endings'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['config'],
    header: 'config',
    key: 'config',
    code: 'git config --global core.autocrlf input',
    description: 'Configure Git on Linux to properly handle line endings'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['config'],
    header: 'config',
    key: 'config',
    code: 'git config --global core.quotepath false',
    description: 'Configure Git cyrillic filenames.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['config'],
    header: 'config',
    key: 'config',
    code: 'git config --get remote.origin.url',
    description: 'Get Git remote origin URL.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['clone'],
    header: 'clone',
    key: 'clone',
    code: 'git clone git@github.com:nicothin/web-design.git',
    description: 'клонировать удаленный репозиторий в одноименную папку'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['clone'],
    header: 'clone',
    key: 'clone',
    code: 'git clone git@github.com:nicothin/web-design.git foldername',
    description: 'клонировать удаленный репозиторий в папку «foldername»'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['clone'],
    header: 'clone',
    key: 'clone',
    code: 'git clone git@github.com:nicothin/web-design.git .',
    description: 'клонировать репозиторий в текущую папку'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['add'],
    header: 'add',
    key: 'add',
    code: 'git add .',
    description:
      'добавить к отслеживанию все новые файлы из текущей папки и её подпапок, индексировать отслеживаемые файлы'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['add'],
    header: 'add',
    key: 'add',
    code: 'git add -p',
    description:
      'поочередный просмотр файлов с показом изменений и задаваемым вопросом об отслеживании/индексировании (удобно для добавления в коммит только каких-то конкретных файлов)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm --cached -r folder',
    description: 'удалить папку из отслеживаемых (папка останется на месте)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['reset'],
    header: 'reset',
    key: 'reset',
    code: 'git reset HEAD',
    description: 'убрать из индекса все индексированные файлы'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['reset'],
    header: 'reset',
    key: 'reset',
    code: 'git reset HEAD text.txt',
    description: 'убрать из индекса указанный файл'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['diff'],
    header: 'diff',
    key: 'diff',
    code: 'git diff',
    description:
      'посмотреть непроиндексированные изменения (если есть, иначе ничего не выведет)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['diff'],
    header: 'diff',
    key: 'diff',
    code: 'git diff --staged',
    description:
      'посмотреть проиндексированные изменения (если есть, иначе ничего не выведет)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout -- text.txt',
    description:
      'ОПАСНО: отменить все изменения, внесенные в файл со времени предыдущего коммита'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout text.txt',
    description: 'ОПАСНО: отменить изменения в непроиндексированном файле'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['commit'],
    header: 'commit',
    key: 'commit',
    code: 'git commit -m <msg>',
    description:
      'Use the given <msg> as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['commit'],
    header: 'commit',
    key: 'commit',
    code:
      'git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend] [--dry-run] [(-c | -C | --fixup | --squash) <commit>] [-F <file> | -m <msg>] [--reset-author] [--allow-empty] [--allow-empty-message] [--no-verify] [-e] [--author=<author>] [--date=<date>] [--cleanup=<mode>] [--[no-]status] [-i | -o] [-S[<keyid>]] [--] [<file>…​]',
    description:
      'Stores the current contents of the index in a new commit along with a log message from the user describing the changes.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['commit'],
    header: 'commit',
    key: 'commit',
    code: 'git commit --amend "Your commit"',
    description:
      'Replace the tip of the current branch by creating a new commit. The recorded tree is prepared as usual (including the effect of the -i and -o options and explicit pathspec), and the message from the original commit is used as the starting point, instead of an empty message, when no other message is specified from the command line via options such as -m, -F, -c, etc. The new commit has the same parents and author as the current one (the --reset-author option can countermand this).'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['revert'],
    header: 'revert',
    key: 'revert',
    code: 'git revert HEAD --no-edit',
    description:
      'создать новый коммит, отменяющий изменения последнего коммита без запуска редактора сообщения'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['revert'],
    header: 'revert',
    key: 'revert',
    code: 'git revert b9533bb --no-edit',
    description:
      'создать новый коммит, отменяющий изменения указанного (b9533bb) коммита без запуска редактора сообщения (указаны первые 7 символов хеша коммита)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['reset'],
    header: 'reset',
    key: 'reset',
    code: 'git reset --hard 75e2d51',
    description:
      'вернуть репозиторий в состояние коммита с указанным хешем ОПАСНО! пропадет вся работа, сделанная после этого коммита'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout b9533bb',
    description: 'временно переключиться на коммит с указанным хешем'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout -b new-branch 5589877',
    description: 'создать ветку new-branch, начинающуюся с коммита 5589877'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm text.txt',
    description:
      'удалить из отслеживаемых неиндексированный файл (файл будет удален из папки)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm -f text.txt',
    description:
      'удалить из отслеживаемых индексированный файл (файл будет удален из папки)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm -r log/',
    description:
      'удалить из отслеживаемых всё содержимое папки log/ (папка будет удалена)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm ind*',
    description:
      'удалить из отслеживаемых все файлы с именем, начинающимся на «ind» в текущей папке (файлы будут удалены из папки)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['rm'],
    header: 'rm',
    key: 'rm',
    code: 'git rm --cached readme.txt',
    description:
      'удалить из отслеживаемых индексированный файл (файл останется на месте)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['mv'],
    header: 'mv',
    key: 'mv',
    code: 'git mv text.txt test_new.txt',
    description: 'переименовать файл «text.txt» в «test_new.txt»'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['mv'],
    header: 'mv',
    key: 'mv',
    code: 'git mv readme_new.md folder/',
    description:
      'переместить файл readme_new.md в папку folder/ (должна существовать)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log --oneline',
    description:
      'This is a shorthand for "--pretty=oneline --abbrev-commit" used together.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log -p index.html',
    description:
      'показать историю изменений файла index.html (выход из длинного лога: Q)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log -p -5 index.html',
    description:
      'показать историю изменений файла index.html (последние 5 коммитов, выход из длинного лога: Q)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log -2',
    description: 'показать последние 2 коммита'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log -2 --stat',
    description:
      'показать последние 2 коммита и статистику внесенных ими изменений'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log -p -22',
    description:
      'показать последние 22 коммита и внесенную ими разницу на уровне строк (выход из длинного лога: Q)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log --pretty=format:"%h - %an, %ar : %s" -4',
    description:
      'показать последние 4 коммита с форматированием выводимых данных'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log --graph -10',
    description:
      'показать последние 10 коммитов с ASCII-представлением ветвления'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log --since=2.weeks',
    description: 'показать коммиты за последние 2 недели'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short',
    description: 'мой формат вывода, висящий на алиасе оболочки'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log master..branch_99',
    description:
      'показать коммиты из ветки branch_99, которые не влиты в master'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['log'],
    header: 'log',
    key: 'log',
    code: 'git log branch_99..master',
    description:
      'показать коммиты из ветки master, которые не влиты в branch_99'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['show'],
    header: 'show',
    key: 'show',
    code: 'git show 60d6582',
    description: 'показать изменения из коммита с указанным хешем'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['show'],
    header: 'show',
    key: 'show',
    code: 'git show HEAD^',
    description: 'показать данные о предыдущем коммите'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch',
    description: 'показать список веток'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch -v',
    description: 'показать список веток и последний коммит в каждой'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch new_branch',
    description: 'создать новую ветку с указанным именем'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout new_branch',
    description: 'перейти в указанную ветку'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout -b new_branch',
    description: 'создать новую ветку с указанным именем и перейти в неё'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['merge'],
    header: 'merge',
    key: 'merge',
    code: 'git merge hotfix',
    description: 'влить в ветку, в которой находимся, данные из ветки hotfix'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch --merged',
    description: 'показать ветки, уже слитые с активной (их можно удалять)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch --no-merged',
    description: 'показать ветки, не слитые с активной'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch -a',
    description:
      'показать все имеющиеся ветки (в т.ч. на удаленных репозиториях)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['remote'],
    header: 'remote',
    key: 'remote',
    code: 'git remote rm origin',
    description: 'удалить привязку удалённого репозитория'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['remote'],
    header: 'remote',
    key: 'remote',
    code: 'git remote show origin',
    description:
      'получить данные об удалённом репозитории с сокращенным именем origin'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['fetch'],
    header: 'fetch',
    key: 'fetch',
    code: 'git fetch origin',
    description:
      'скачать все ветки с удаленного репозитория (с сокр. именем origin), но не сливать со своими ветками'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['fetch'],
    header: 'fetch',
    key: 'fetch',
    code: 'git fetch origin master',
    description: 'то же, но скачивается только указанная ветка'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout origin/github_branch',
    description:
      'посмотреть ветку, скачанную с удалённого репозитория (локальной редактируемой копии не создаётся! если нужно редактировать, придётся влить)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout --track origin/github_branch',
    description:
      'создать локальную ветку github_branch (данные взять из удалённого репозитория с сокр. именем origin, ветка github_branch) и переключиться на неё'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['push'],
    header: 'push',
    key: 'push',
    code: 'git push -u [remote-name] [branch-name]',
    description:
      'For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull and other commands. For more information, see branch.<name>.merge in git-config.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['pull'],
    header: 'pull',
    key: 'pull',
    code: 'git pull origin',
    description: 'влить изменения с удалённого репозитория (все ветки)'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['clean'],
    header: 'clean',
    key: 'clean',
    code: 'git clean -f',
    description: 'удалить из репозитория все неотслеживаемые файлы'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['init'],
    header: 'init',
    key: 'init',
    code: 'git init',
    description: 'инициируем гит в этой папке'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['readme'],
    header: 'readme',
    key: 'readme',
    code: 'touch readme.md',
    description: 'создаем файл readme.md'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['push'],
    header: 'push',
    key: 'push',
    code:
      'git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>] [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose] [-u | --set-upstream] [--push-option=<string>] [--[no-]signed|--sign=(true|false|if-asked)] [--force-with-lease[=<refname>[:<expect>]]] [--no-verify] [<repository> [<refspec>…​]]',
    description:
      'Updates remote refs using local refs, while sending objects necessary to complete the given refs.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['push'],
    header: 'push',
    key: 'push',
    code: 'git push origin master',
    description:
      'Отправляем данные из локального репозитория в удаленный (в репозиторий origin ветку master).'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout master',
    description: 'возвращаемся к ветке master'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['inc'],
    header: 'inc',
    key: 'inc',
    code: 'subl inc/footer.html',
    description: 'устраняем баг и сохраняем разметку «подвала»'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['branch'],
    header: 'branch',
    key: 'branch',
    code: 'git branch -d hotfix',
    description: 'удаляем ветку hotfix'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['inc'],
    header: 'inc',
    key: 'inc',
    code: 'subl inc/header.html',
    description: 'редактируем и сохраняем разметку «шапки»'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: [''],
    header: 'subl',
    key: '',
    code: 'subl .',
    description: 'редактируем и сохраняем файлы'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['commit'],
    header: 'commit',
    key: 'commit',
    code: 'git commit -a "Your commit"',
    description:
      'Tell the command to automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['fetch'],
    header: 'fetch',
    key: 'fetch',
    code: 'git fetch upstream',
    description:
      'качаем все ветки мастер-репозитория, но пока не сливаем со своими'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['merge'],
    header: 'merge',
    key: 'merge',
    code: 'git merge upstream/master',
    description:
      'вливаем ветку master удалённого репозитория upstream в свою ветку master'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['reset'],
    header: 'reset',
    key: 'reset',
    code: 'git reset HEAD~ --hard',
    description: 'жОско сбрасываем состояние master'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['checkout'],
    header: 'checkout',
    key: 'checkout',
    code: 'git checkout f26ed88 -- index.html',
    description:
      'указана SHA коммита, к состоянию которого нужно вернуть файл и имя файла'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['status'],
    header: 'status',
    key: 'status',
    code: 'git status',
    description: 'изменения внесены в файл, файл сразу проиндексирован'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['remote'],
    header: 'remote',
    key: 'remote',
    code: 'git remote -v',
    description:
      'показать список удалённых репозиториев с адресами (у проблемного будет адрес по https), предположим, это origin'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['remote'],
    header: 'remote',
    key: 'remote',
    code: 'git remote add origin git@github.com:address.git',
    description: 'добавляем удаленный репозиторий, сокр. имя — origin'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: ['clean'],
    header: 'clean',
    key: 'clean',
    code: 'git clean -xf',
    description: 'Clean uncommited changes.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['SSH and SFTP errors'],
    header: 'pam_tally2',
    key: 'pam_tally2',
    code: 'pam_tally2 -u <user>',
    description: 'Проверяем ошибки доступа пользователя.'
  },
  {
    product: 'laravel',
    versions: ['all'],
    categories: ['install'],
    header: 'composer',
    key: '',
    code:
      'composer create-project laravel/laravel folder_name\ncomposer install\ncomposer update\ncomposer dump-autoload [--optimize]\ncomposer self-update',
    description: 'Установка Laravel через Composer.'
  },
  {
    product: 'laravel',
    versions: ['all'],
    categories: [''],
    header: 'app',
    key: '',
    code: "App::environment('local');",
    description: 'test equal to'
  },
  {
    product: 'laravel',
    versions: ['all'],
    categories: [''],
    header: 'app',
    key: '',
    code: 'App::runningInConsole();',
    description: 'test equal to'
  },
  {
    product: 'laravel',
    versions: ['all'],
    categories: [''],
    header: 'app',
    key: '',
    code: 'App::runningUnitTests();',
    description: 'test equal to'
  },
  {
    product: 'laravel',
    versions: ['all'],
    categories: [''],
    header: 'app',
    key: '',
    code: 'App::environment();',
    description: ''
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status', 'codes'],
    header: '1xx Information responses',
    key: '',
    code: '100 Continue',
    description:
      'This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '1xx Information responses',
    key: '',
    code: '100 Continue',
    description:
      'This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '1xx Information responses',
    key: '',
    code: '101 Switching Protocol',
    description:
      'This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '1xx Information responses',
    key: '',
    code: '102 Processing (WebDAV)',
    description:
      'This code indicates that the server has received and is processing the request, but no response is available yet.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '200 OK',
    description:
      'The request has succeeded. The meaning of a success varies depending on the HTTP method:'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '201 Created',
    description:
      'The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '202 Accepted',
    description:
      'The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '203 Non-Authoritative Information',
    description:
      'This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '204 No Content',
    description:
      'There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '205 Reset Content',
    description:
      'This response code is sent after accomplishing request to tell user agent reset document view which sent this request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '206 Partial Content',
    description:
      'This response code is used because of range header sent by the client to separate download into multiple streams.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '207 Multi-Status (WebDAV)',
    description:
      'A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '208 Multi-Status (WebDAV)',
    description:
      'Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '2xx Successful responses',
    key: '',
    code: '226 IM Used (HTTP Delta encoding)',
    description:
      'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '300 Multiple Choice',
    description:
      'The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '301 Moved Permanently',
    description:
      'This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '302 Found',
    description:
      'This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '303 See Other',
    description:
      'Server sent this response to directing client to get requested resource to another URI with an GET request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '304 Not Modified',
    description:
      'This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '305 Use Proxy',
    description:
      'Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '306 unused',
    description:
      'This response code is no longer used, it is just reserved currently. It was used in a previous version of the HTTP 1.1 specification.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '307 Temporary Redirect',
    description:
      'Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '3xx Redirection messages',
    key: '',
    code: '308 Permanent Redirect',
    description:
      'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '400 Bad Request',
    description:
      'This response means that server could not understand the request due to invalid syntax.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '401 Unauthorized',
    description:
      'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '402 Payment Required',
    description:
      'This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '403 Forbidden',
    description:
      "The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '404 Not Found',
    description:
      'The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '405 Method Not Allowed',
    description:
      'The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '406 Not Acceptable',
    description:
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '407 Proxy Authentication Required',
    description:
      'This is similar to 401 but authentication is needed to be done by a proxy.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '408 Request Timeout',
    description:
      'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '409 Conflict',
    description:
      'This response is sent when a request conflicts with the current state of the server.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '410 Gone',
    description:
      'This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited - time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '411 Length Required',
    description:
      'Server rejected the request because the Content-Length header field is not defined and the server requires it.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '412 Precondition Failed',
    description:
      'The client has indicated preconditions in its headers which the server does not meet.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '413 Payload Too Large',
    description:
      'Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '414 URI Too Long',
    description:
      'The URI requested by the client is longer than the server is willing to interpret.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '415 Unsupported Media Type',
    description:
      'The media format of the requested data is not supported by the server, so the server is rejecting the request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '416 Requested Range Not Satisfiable',
    description:
      "The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '417 Expectation Failed',
    description:
      "This response code means the expectation indicated by the Expect request header field can't be met by the server."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: "418 I'm a teapot",
    description: 'The server refuses the attempt to brew coffee with a teapot.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '421 Misdirected Request',
    description:
      'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '422 Unprocessable Entity (WebDAV)',
    description:
      'The request was well-formed but was unable to be followed due to semantic errors.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '423 Locked (WebDAV)',
    description: 'The resource that is being accessed is locked.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '424 Failed Dependency (WebDAV)',
    description: 'The request failed due to failure of a previous request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '426 Upgrade Required',
    description:
      'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '428 Precondition Required',
    description:
      "The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '429 Too Many Requests',
    description:
      'The user has sent too many requests in a given amount of time ("rate limiting").'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '431 Request Header Fields Too Large',
    description:
      'The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '4xx Client error responses',
    key: '',
    code: '451 Unavailable For Legal Reasons',
    description:
      'The user requests an illegal resource, such as a web page censored by a government.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '500 Internal Server Error',
    description:
      "The server has encountered a situation it doesn't know how to handle."
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '501 Not Implemented',
    description:
      'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '502 Bad Gateway',
    description:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '503 Service Unavailable',
    description:
      'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '504 Gateway Timeout',
    description:
      'This error response is given when the server is acting as a gateway and cannot get a response in time.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '505 HTTP Version Not Supported',
    description:
      'The HTTP version used in the request is not supported by the server.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '506 Variant Also Negotiates',
    description:
      'The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '507 Insufficient Storage',
    description:
      'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '508 Loop Detected (WebDAV)',
    description:
      'The server detected an infinite loop while processing the request.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '510 Not Extended',
    description:
      'Further extensions to the request are required for the server to fulfill it.'
  },
  {
    product: 'http',
    versions: ['all'],
    categories: ['http', 'response', 'status'],
    header: '5xx Server error responses',
    key: '',
    code: '511 Network Authentication Required',
    description:
      'The 511 status code indicates that the client needs to authenticate to gain network access.'
  },
  {
    product: 'Unix',
    versions: ['all'],
    categories: ['Unix', 'find', 'dos2Unix'],
    header: 'find',
    key: '',
    code: 'find ./ -type f -exec dos2Unix {} \\;',
    description:
      'One-liner that recursively replaces line endings and properly handles whitespace, quotes, and shell meta chars.'
  },
  {
    product: 'git',
    versions: ['all'],
    categories: [],
    header: 'config',
    key: '',
    code: 'git config core.eol lf\ngit config core.autocrlf input',
    description: 'Unix-style file endings.'
  }
];

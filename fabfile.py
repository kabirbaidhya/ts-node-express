import sys

from boss.init import init
from boss.tasks import *
from fabric.api import task
# from boss.api import ssh

init(__name__)
#
#
#def upload_callback(sent, total):
#    progress = (sent * 100.0 / total)
#    sys.stdout.write('\rUploading: {:.2f}%'.format(progress))
#    sys.stdout.flush()
#
#
#@task
#def upload():
#    ''' Just test. '''
#    print('uploading file without progress')
#    ssh.put('z.zip', 'z.zip')
#
#    print('upload completed')
#    ssh.put('z.zip', 'z.zip', upload_callback)
#    print('upload completed')

# guilsa.com Infrastructure

Ansible playbooks for setting up guilsa.com static site infrastructure.

## Prerequisites

- VPS provisioned by [ansible-vps](https://github.com/YOUR_USERNAME/ansible-vps) (nginx, system basics)
- Ansible installed locally: `brew install ansible`
- SSH access configured in `~/.ssh/config` for target VPS

## Setup (One-time)

```bash
cd infra
ansible-playbook playbooks/deploy.yml
```

This creates:
- `/var/www/html/guilsa.com` directory
- Nginx configuration for guilsa.com

## Deploy Files

```bash
cd ..
npm run build
make deploy
```

Or to a specific VPS:

```bash
make deploy VPS=root@hetzner
```

## Configuration

Variables in `group_vars/production.yml`:
- `site_domain` - Domain name (guilsa.com)
- `site_root` - VPS path for site files

## SSH Configuration

Ensure `~/.ssh/config` has:

```
Host racknerd
  HostName YOUR_VPS_IP
  User root
  IdentityFile ~/.ssh/racknerd
```

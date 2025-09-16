#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

console.log('🏥 System Health Monitor v1.8.2');
console.log('===============================');

// Simulate health checks
const services = [
  { name: 'Database', url: 'localhost:5432', status: 'healthy' },
  { name: 'Redis Cache', url: 'localhost:6379', status: 'healthy' },
  { name: 'API Gateway', url: 'localhost:8080', status: 'degraded' },
  { name: 'Message Queue', url: 'localhost:5672', status: 'healthy' }
];

console.log('🔍 Performing health checks...\n');

services.forEach((service, index) => {
  setTimeout(() => {
    const responseTime = Math.floor(Math.random() * 200) + 50;
    const statusIcon = service.status === 'healthy' ? '🟢' : 
                      service.status === 'degraded' ? '🟡' : '🔴';
    
    console.log(`${statusIcon} ${service.name} (${service.url})`);
    console.log(`   ⏱️  Response time: ${responseTime}ms`);
    console.log(`   📊 Status: ${service.status.toUpperCase()}`);
    
    if (service.status === 'degraded') {
      console.log(`   ⚠️  Warning: Performance degradation detected`);
    }
    
    console.log('');
  }, index * 500);
});

setTimeout(() => {
  const healthyCount = services.filter(s => s.status === 'healthy').length;
  const totalServices = services.length;
  const healthPercentage = Math.floor((healthyCount / totalServices) * 100);
  
  console.log('📋 Health Check Summary:');
  console.log(`   🎯 Overall health: ${healthPercentage}%`);
  console.log(`   ✅ Healthy services: ${healthyCount}/${totalServices}`);
  console.log(`   ⏰ Last check: ${new Date().toISOString()}`);
}, 2500);